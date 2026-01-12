
import { Navbar } from '@/components/ui/navbar'
import InfiniteMenu from '@/components/ui/InfiniteMenu';
import { getCloudinaryUrl } from '@/lib/cloudinary';

const items = [
    {
        image: '/gallery/img1.jpg',
        link: '#',
        title: 'DD Robocon 2019',
        description: 'AIR 12th in DD Robocon 2019 & 1st Runner-up in MATHWORKS Modelling Award 2019'
    },
    {
        image: '/gallery/img2.png',
        link: '#',
        title: 'Team Automatons 2019',
        description: 'Working together to solve complex engineering challenges.'
    },
    {
        image: '/gallery/img3.jpg',
        link: '#',
        title: 'DD Robocon 2024',
        description: 'AIR 2nd in DD Robocon 2024'
    },
    {
        image: '/gallery/img4.jpg',
        link: '#',
        title: 'DD Robocon 2022',
        description: 'AIR 3rd in DD Robocon 2022'
    },
    {
        image: '/gallery/img5.jpg',
        link: '#',
        title: 'Team Automatons 2023',
        description: 'Working together to solve complex engineering challenges.'
    },
    {
        image: '/gallery/_MG_8332 (2).JPG.jpg',
        link: '#',
        title: 'Robocon 2018',
        description: 'ném còn (throwing shuttlecock) Robot '
    },
    {
        image: '/gallery/_MG_8458.JPG',
        link: '#',
        title: 'Robocon 2018',
        description: 'Team Automatons in Robocon 2018.'
    },
    {
        image: '/gallery/2015.jpg',
        link: '#',
        title: 'Robocon 2015',
        description: 'Team Automatons in Robocon 2015.'
    },
    {
        image: '/gallery/2017_bot.jpg',
        link: '#',
        title: 'Robocon 2017',
        description: 'Team Automatons in Robocon 2017.'
    },
    {
        image: '/gallery/2024_r1_cropped.jpg',
        link: '#',
        title: 'Robocon 2024 R1 robot ',
        description: 'Harvest Day '
    },
    {
        image: '/gallery/2024_r1.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Harvest Day '
    },
    {
        image: '/gallery/2024_r2_cropped.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Harvest Day R2 Autonomous robot'
    },
    {
        image: '/gallery/2024_r2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Harvest Day R2 Autonomous robot'
    },
    {
        image: '/gallery/2024_robots.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Harvest Day R1 and R2 robots'
    },
    {
        image: '/gallery/evening lawn mr2.jpg',
        link: '#',
        title: 'Robocon 2024',
        description: 'Team Automatons in Robocon 2024.'
    },
    {
        image: '/gallery/IMG_8020.JPG',
        link: '#',
        title: 'Robocon 2018',
        description: 'Team Automatons in Robocon 2018.'
    },
    {
        image: '/gallery/IMG_20190615_101605__01.jpg',
        link: '#',
        title: 'Robocon 2018',
        description: 'Team Automatons in Robocon 2018.'
    },
    {
        image: '/gallery/InShot_20191225_121508119.jpg',
        link: '#',
        title: 'Steeltoe 1.0',
        description: 'Quadruped robot'
    },
    {
        image: '/gallery/MR1 2.jpg',
        link: '#',
        title: 'Robocon 2019',
        description: 'Team Automatons in Robocon 2019.'
    },
    {
        image: '/gallery/MR1 3.jpg',
        link: '#',
        title: 'Robocon 2019',
        description: 'Team Automatons in Robocon 2019.'
    },
    {
        image: '/gallery/MR2 1.jpg',
        link: '#',
        title: 'Robocon 2019',
        description: 'Team Automatons in Robocon 2019.'
    },
    {
        image: '/gallery/MR2 2.jpg',
        link: '#',
        title: 'Robocon 2019',
        description: 'Autonomous quadruped robot'
    },
    {
        image: '/gallery/MR2 3.jpg',
        link: '#',
        title: 'quadruped robot',
        description: ''
    },
    {
        image: '/gallery/MR2 4.jpg',
        link: '#',
        title: 'Robocon 2019',
        description: 'Autonomous quadruped robot'
    },
    {
        image: '/gallery/picture.jpg',
        link: '#',
        title: 'Robocon ',
        description: '  '
    },
    {
        image: '/gallery/ROBOCON 2017 bot1.JPG',
        link: '#',
        title: 'Robocon 2017',
        description: 'Team Automatons in Robocon 2017.'
    },
    {
        image: '/gallery/image.png',
        link: '#',
        title: 'Robocon 2025',
        description: 'Team Automatons in Robocon 2025.'
    },
    {
        image: '/gallery/image copy.png',
        link: '#',
        title: 'Robocon 2025',
        description: 'Team Automatons in Robocon 2025.'
    },
    {
        image: '/gallery/IRC 25 Day1 [DoPy] 18.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'Team Automatons in IRC 2025.'
    },
    {
        image: '/gallery/IRC 25 Day1 [DoPy] 21.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'Rover performing IDMO task in IRC 2025.'
    },
    {
        image: '/gallery/IRC 25 Day1 [DoPy] 37.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'Kartikeya in IRC 2025.'
    },
    {
        image: '/gallery/IRC 25 Day1 [DoPy] 39.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'Kartikeya in IRC 2025.'
    },
    {
        image: '/gallery/IRC 25 Day1 [DoPy] 84.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'PIMA in IRC 2025.'
    },
    {
        image: '/gallery/IRC 25 Day2 [DoPy] 4.jpg',
        link: '#',
        title: 'IRC 2025',
        description: 'Team Automatons in IRC 2025.'
    }
].map(item => ({ ...item, image: getCloudinaryUrl(item.image) }));

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white relative overflow-hidden">
            <Navbar />

            {/* Background Gradient */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-50 pointer-events-none" />

            <div className="absolute inset-0 pt-20 h-screen w-full z-10">
                <InfiniteMenu items={items} scale={1.5} />
            </div>
        </main>
    );
}
