
$sourcePath = "public/gallery/IRC 25 Day1 [DoPy] 84.jpg"
$destPath = "public/gallery/IRC 25 Day1 [DoPy] 84_optimized.jpg"

Add-Type -AssemblyName System.Drawing

$image = [System.Drawing.Image]::FromFile($sourcePath)
$maxDimension = 2048

$newWidth = $image.Width
$newHeight = $image.Height

if ($image.Width -gt $maxDimension -or $image.Height -gt $maxDimension) {
    if ($image.Width -gt $image.Height) {
        $newWidth = $maxDimension
        $newHeight = [int]($image.Height * ($maxDimension / $image.Width))
    } else {
        $newHeight = $maxDimension
        $newWidth = [int]($image.Width * ($maxDimension / $image.Height))
    }
}

$bitmap = new-object System.Drawing.Bitmap $newWidth, $newHeight
$graph = [System.Drawing.Graphics]::FromImage($bitmap)
$graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graph.DrawImage($image, 0, 0, $newWidth, $newHeight)

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)

$bitmap.Save($destPath, $codec, $encoderParams)

$image.Dispose()
$bitmap.Dispose()
$graph.Dispose()

Write-Host "Resized image saved to $destPath"
