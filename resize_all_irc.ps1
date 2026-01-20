
$maxWidth = 2048
$maxHeight = 2048
$quality = 80

Add-Type -AssemblyName System.Drawing

$files = Get-ChildItem -Path "public/irc/*.jpg", "public/irc/*.png", "public/gallery/*.jpg" | Where-Object { $_.Length -gt 5MB }

foreach ($file in $files) {
    Write-Host "Processing $($file.Name) ($([Math]::Round($file.Length/1MB, 2)) MB)..."
    
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        $newWidth = $img.Width
        $newHeight = $img.Height
        
        if ($newWidth -gt $maxWidth -or $newHeight -gt $maxHeight) {
            $ratio = [Math]::Min($maxWidth / $newWidth, $maxHeight / $newHeight)
            $newWidth = [int]($newWidth * $ratio)
            $newHeight = [int]($newHeight * $ratio)
        }
        
        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        $img.Dispose()
        
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        if ($file.Extension -eq ".png") {
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/png" }
        }
        
        $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
        
        $bmp.Save($file.FullName, $codec, $params)
        
        $bmp.Dispose()
        $g.Dispose()
        
        $newSize = (Get-Item $file.FullName).Length
        Write-Host "  SUCCESS: New size $([Math]::Round($newSize/1MB, 2)) MB"
    }
    catch {
        Write-Host "  ERROR processing $($file.Name): $($_.Exception.Message)"
    }
}
