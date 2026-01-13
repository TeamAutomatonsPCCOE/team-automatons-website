'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer-section';
import { TeamTimeline } from '@/components/blocks/TeamTimeline';
import { TeamProfileCard } from '@/components/ui/TeamProfileCard';
import { OpenSourceSection } from '@/components/blocks/OpenSourceSection';
import { getCloudinaryUrl } from '@/lib/cloudinary';

// Team Member Data
const TEAM_DATA = {
    2026: {
        groupPhoto: '', // Placeholder - user needs to add correct path
        "BTech Members": [
            {
                id: '2026-c1',
                name: 'Rajvardhan Pawar',
                role: 'Head Admin',
                companyRole: '',
                photo: '/team/2026/Rajvardhan.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajvardhanpawar57@gmail.com',
                linkedin: 'https://www.linkedin.com/in/rajvardhan-pawar-66981a259'
            },
            {
                id: '2026-c2',
                name: 'Harshvardhan Mule',
                role: 'Co - Head Admin (Robocon)',
                companyRole: 'Firmware Engineer - Addverb ',
                photo: '/team/2026/Harshvardhan.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=harshvardhanmule0203@gmail.com',
                linkedin: 'https://www.linkedin.com/in/harshvardhan-mule'
            },
            {
                id: '2026-c3',
                name: 'Prasad Lokhande',
                role: 'Co - Head Admin(Space Robotics)',
                companyRole: '',
                photo: '/team/2026/Prasad.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=prasadlokh@gmail.com',
                linkedin: 'https://www.linkedin.com/in/prasad-lokhande-a1591b275'
            },
            {
                id: '2026-c4',
                name: 'Ashwini Lodade',
                role: 'Mechanical Admin',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ashwinilodade4@gmail.com',
                linkedin: 'https://www.linkedin.com/in/ashwini-lodade-558814259'
            },
            {
                id: '2026-c5',
                name: 'Krushna Hivare',
                role: 'Electronics Admin',
                companyRole: '',
                photo: '/team/2026/Krushna.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=hiwarekrishna0@gmail.com',
                linkedin: 'https://www.linkedin.com/in/krushna-hiware-648480259'
            },
            {
                id: '2026-c6',
                name: 'Samiksha Hivare',
                role: 'Programming Admin',
                companyRole: 'ML Engineer - Quantiphi',
                photo: '/team/2026/Samiksha.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=samikshadhurve.28@gmail.com',
                linkedin: 'https://www.linkedin.com/in/samiksha-dhurve-8a0793257'
            },
            {
                id: '2026-c7',
                name: 'Aarya Furade',
                role: 'Networking Admin',
                companyRole: '',
                photo: '/team/2026/Aarya.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=aaryafurade@gmail.com',
                linkedin: 'https://www.linkedin.com/in/aarya-furade-537434210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-c8',
                name: 'Om Parakh',
                role: 'Finance Admin',
                companyRole: '',
                photo: '/team/2026/Om P.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=omparekh425@gmail.com',
                linkedin: 'https://www.linkedin.com/in/om-parekh-365843259'
            },
            {
                id: '2026-c9',
                name: 'Shruti Date ',
                role: 'HR',
                companyRole: 'Product Manager - Philips ',
                photo: '/team/2026/Shruti.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shrutidate2003@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shruti-date-b56813259'
            },
            {
                id: '2026-c10',
                name: 'Aahana Mukhopadya ',
                role: 'Admin',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-c11',
                name: 'Akshay Wani',
                role: 'Admin ',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=akshaywani1382004@gmail.com',
                linkedin: 'https://www.linkedin.com/in/akshay-wani2004'
            },
            {
                id: '2026-c12',
                name: 'Nikhil Jagadale',
                role: 'Admin ',
                companyRole: '(Previous) ROS intern - Technowings Automation Pvt. Ltd. ',
                photo: '/team/2026/Nikhil.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=nikhiljagdale200414@gmail.com',
                linkedin: 'https://www.linkedin.com/in/nikhil--jagdale'
            },
            {
                id: '2026-c13',
                name: 'Pushkar Jadhav',
                role: ' Admin ',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: '',
                linkedin: ''
            },
        ],
        "TY Members": [
            {
                id: '2026-h1',
                name: 'Piyush Satish Patil',
                role: 'Managing Director',
                companyRole: '',
                photo: '/team/2026/Piyush.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushspatil225@gmail.com',
                linkedin: 'https://www.linkedin.com/in/piyush-patil-8630ab292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h2',
                name: 'Vardhan Santosh Khinvasara',
                role: 'Co-Managing Director (Robocon)',
                companyRole: '',
                photo: '/team/2026/Vardhan.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=vardhansk18115@gmail.com',
                linkedin: 'https://www.linkedin.com/in/vardhan-santosh-khinvasara-9a79a8296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h3',
                name: 'Atharva Ananda Junghare',
                role: 'Co-Managing Director (Space Robotics)',
                companyRole: '',
                photo: '/team/2026/Atharva.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=atharva.junghare2005@gmail.com',
                linkedin: 'https://www.linkedin.com/in/atharva-junghare-681782278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2026-h4',
                name: 'Shreyash Umesh Jagadale',
                role: 'Mechanical Head',
                companyRole: '',
                photo: '/team/2026/Shreyash.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyash.jagadale.01@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreyash-jagadale-6930b3292/'
            },
            {
                id: '2026-h5',
                name: 'Chinmay Jitendra Patil',
                role: 'Electronics Head',
                companyRole: '',
                photo: '/team/2026/Chinmay.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=pchinmay834@gmail.com',
                linkedin: 'https://www.linkedin.com/in/chinmay-patil-a430b0292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h6',
                name: 'Om Jagtap',
                role: 'Programming Head',
                companyRole: '',
                photo: '/team/2026/Om J.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=omjagtap300@gmail.com',
                linkedin: 'https://www.linkedin.com/in/om-jagtap-506a76300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h7',
                name: 'Laxmikanth Nannaware',
                role: 'Finance Head',
                companyRole: '',
                photo: '/team/2026/Laxmikanth.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=laxmikantnn1@gmail.com',
                linkedin: 'https://www.linkedin.com/in/laxmikant-nannaware-4731a5275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h8',
                name: 'Aditya Yadav',
                role: 'Sr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/Aditya.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=aditya.yadav3514@gmail.com',
                linkedin: 'https://www.linkedin.com/in/aditya-yadav-20341b308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h9',
                name: 'Sneha Pawar',
                role: 'Sr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/Sneha.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sneha.pawar23@pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/sneha-pawar-43b43a337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h10',
                name: 'Samehaan Joshi',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-h11',
                name: 'Anushree Sandeep Narayan',
                role: 'Sr. Electronics Circuit Designer',
                companyRole: '',
                photo: '/team/2026/Anushree.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=anushreesnarkhede@gmail.com',
                linkedin: 'https://www.linkedin.com/in/anushree-narkhede-7a84a9292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h12',
                name: 'Devansh Jadhav',
                role: 'Sr. Electronics Circuit Designer',
                companyRole: '',
                photo: '/team/2026/Devansh.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=devanshjadhav2005@gmail.com',
                linkedin: 'https://www.linkedin.com/in/devansh-jadhav-1889b932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h13',
                name: 'Gauri',
                role: 'Sr. Electronics Circuit Designer',
                companyRole: '',
                photo: '/team/2026/Gauri.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=gauritarale124@gmail.com',
                linkedin: 'https://www.linkedin.com/in/gauri-tarale-a690b0292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-h14',
                name: 'Shreya Zankar',
                role: 'Sr. Electronics Circuit Designer',
                companyRole: '',
                photo: '/team/2026/Shreya Z.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyazankar021@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreyazankar021'
            },
            {
                id: '2026-h15',
                name: 'Saniya Dumore',
                role: 'Jr. Electronics Engineer',
                companyRole: '',
                photo: '/team/2026/Saniya.webp',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-h16',
                name: 'Sujata Swami',
                role: 'Sr. CV Engineer',
                companyRole: '',
                photo: '/team/2026/Sujata.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sujata.automatons3@gmail.com',
                linkedin: 'https://www.linkedin.com/me?trk=p_mwlite_profile_view-secondary_nav'
            },
            {
                id: '2026-h17',
                name: 'Yash Sonje',
                role: 'Sr. ROS Engineer',
                companyRole: '',
                photo: '/team/2026/Yash.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=yash.sonje23@pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/yash-sonje-5b6812292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        ],
        "SY Members": [
            {
                id: '2026-m1',
                name: 'Dhruvi Patel ',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/Dhruvi.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=2311dhruvipatel@gmail.com',
                linkedin: 'https://www.linkedin.com/in/dhruvipatel2311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m2',
                name: 'Himanshu Naresh Warke ',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/Himanshu.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=himanshu.warke@24pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/himanshu-mech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m3',
                name: 'Manasi Sandeep Dhake',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=manasid808@gmail.com',
                linkedin: 'https://www.linkedin.com/in/manasi-dhake-52723437b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m4',
                name: ' Piyush Suryavanshi',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-m5',
                name: ' Prakhar Dubey',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=prakhardubey797@gmail.com',
                linkedin: 'https://www.linkedin.com/in/prakhar-dubey-b3b942344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m6',
                name: 'Pratap Dhananjay Randive',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=prataprandive2702@gmail.com',
                linkedin: 'https://www.linkedin.com/in/pratap-randive-8b8846302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m7',
                name: 'Priya Naik',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=priya.naik24@pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/priya-naik-670a0632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },

            {
                id: '2026-m8',
                name: 'Siddhesh Jayant kurundkar',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=siddhesh192006@gmail.com',
                linkedin: 'https://www.linkedin.com/in/siddhesh-kurundkar-b2b03337a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m9',
                name: 'Tejas Bhagat',
                role: 'Jr. Mechanical Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-m10',
                name: 'Atreya Rahegaonkar',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/Atreya.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=atreyaxr@gmail.com',
                linkedin: 'https://www.linkedin.com/in/atreya-r/'
            },
            {
                id: '2026-m11',
                name: 'Ashna Kankaria ',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ashnakankaria05@gmail.com',
                linkedin: 'https://www.linkedin.com/in/ashna-kankaria-99821732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m12',
                name: 'Atharva Phadke ',
                role: 'Jr. Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=atharvaphadke8@gmail.com',
                linkedin: 'https://www.linkedin.com/in/atharvap8/'
            },
            {
                id: '2026-m13',
                name: 'Harshal Swami',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/Harshal.webp',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-m14',
                name: 'Laxmi Chavhan ',
                role: 'Jr. Electronics Circuit Design Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=laxmichavhan003@gmail.com',
                linkedin: 'https://www.linkedin.com/in/laxmi-chavhan-47121732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2026-m15',
                name: 'Mayank Bahekar',
                role: 'Jr. Electronics Circuit Design Engineer',
                companyRole: '',
                photo: '/team/2026/image.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=bahekarmayank@gnail.com',
                linkedin: 'https://www.linkedin.com/in/mayank-bahekar-08b79a239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2026-m16',
                name: 'Shreya Janorkar',
                role: 'Jr. Electronics Circuit Design Engineer',
                companyRole: '',
                photo: '/team/2026/Shreya J.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyajanorkar07@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreya-janorkar-b53126328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m17',
                name: 'Siddhika Patil',
                role: 'Jr. Electronics Circuit Design Engineer',
                companyRole: '',
                photo: '/team/2026/Siddhika.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=siddhikapatil14@gmail.com',
                linkedin: 'https://www.linkedin.com/in/siddhika-patil-294a0a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m18',
                name: 'Om Borhade',
                role: 'Jr. Electronics Circuit Design Engineer',
                companyRole: '',
                photo: '/team/2026/Om B.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=omborhade1506@gmail.com',
                linkedin: 'https://www.linkedin.com/in/om-borhade-071a1032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m19',
                name: 'Om Vidhani',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/Om V.webp',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-m20',
                name: 'Tanvi Patil',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/image.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=tanvi.n.patil@gmail.com',
                linkedin: 'https://www.linkedin.com/in/tanvi-patil-8aa21532b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m21',
                name: 'Utkarsh Jhala',
                role: 'Jr. Embedded Engineer',
                companyRole: '',
                photo: '/team/2026/Utkarsh.webp',
                email: '',
                linkedin: ''
            },
            {
                id: '2026-m22',
                name: 'Ayush Hanumant Gade',
                role: 'Jr. ROS Engineer',
                companyRole: '',
                photo: '/team/2026/Ayush G.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayush.gade241@pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/ayush-gade-34b226368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m23',
                name: 'Gandharv Godse',
                role: 'Jr. ROS Engineer',
                companyRole: '',
                photo: '/team/2026/Gandharva.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=gandharvgodse2007@gmail.com',
                linkedin: 'https://www.linkedin.com/in/gandharva-godse-a3130a32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m24',
                name: 'Hrushikesh Jagtap',
                role: 'Jr. CV Engineer',
                companyRole: '',
                photo: '/team/2026/image.png',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=hrushijagtap333@gmail.com',
                linkedin: 'https://www.linkedin.com/in/hrushikesh-jagtap-77b64232b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2026-m25',
                name: 'Krish Patel',
                role: 'Jr. CV Engineer',
                companyRole: '',
                photo: '/team/2026/Krish.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=krishpatelnsk@gmail.com',
                linkedin: 'https://www.linkedin.com/in/krish-patel-a52a0532a/'
            },
            {
                id: '2026-m26',
                name: 'Prathamesh Sonwalkar',
                role: 'Jr. CV Engineer',
                companyRole: '',
                photo: '/team/2026/Prathamesh.webp',
                email: '',
                linkedin: ''
            }
        ],
    },
    2025: {
        groupPhoto: '/gallery/image.png', // Placeholder - user needs to add correct path
        "BTech Members": [
            {
                id: '2025-b1',
                name: 'Shubham Chaudhari',
                role: 'Management Admin',
                companyRole: '',
                photo: '/team/2025/shubham.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shubhamchaudhari0311@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shubham-chaudhari-1b8bba236'
            },
            {
                id: '2025-b2',
                name: 'Sagar Patle',
                role: 'Mechanical Admin',
                companyRole: '',
                photo: '/team/2025/sagar.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sagarpatle8055@gmail.com',
                linkedin: 'https://www.linkedin.com/in/sagar-patle-987953236'
            },
            {
                id: '2025-b3',
                name: 'Nikita Savale',
                role: 'Electronics Admin',
                companyRole: '',
                photo: '/team/2025/nikita.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=nikitasavale457@gmail.com',
                linkedin: 'https://www.linkedin.com/in/nikita-savale/'
            },
            {
                id: '2025-b4',
                name: 'Nikita Savale',
                role: 'Programming Admin',
                companyRole: '',
                photo: '/team/2025/sarthak.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sarthakjoshi2743@gmail.com',
                linkedin: 'https://www.linkedin.com/in/sarthak-joshi-205a38229'
            },
            {
                id: '2025-b5',
                name: 'Shreya Desai',
                role: 'Research & Development Admin',
                companyRole: '',
                photo: '/team/2025/shreya (1).webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyaa.desai21@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreya-desai-146556229'
            },
            {
                id: '2025-b6',
                name: 'Aniket Goswami',
                role: 'Networking & Finance Admin',
                companyRole: '',
                photo: '/team/2025/aniket.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=aniketgoswami2003@gmail.com',
                linkedin: 'https://www.linkedin.com/in/aniket-goswami-929a69259'
            },

        ],
        "TY Members": [
            {
                id: '2025-t1',
                name: 'Rajvardhan Pawar',
                role: 'Managing Director',
                companyRole: '',
                photo: '/team/2025/raj.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=rajvardhanpawar57@gmail.com',
                linkedin: 'https://www.linkedin.com/in/rajvardhan-pawar-66981a259'
            },
            {
                id: '2025-t2',
                name: 'Harshvardhan Mule',
                role: 'Robocon Co-Managing Director',
                companyRole: '',
                photo: '/team/2025/mule.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=harshvardhanmule0203@gmail.com',
                linkedin: 'https://www.linkedin.com/in/harshvardhan-mule'
            },
            {
                id: '2025-t3',
                name: 'Prasad Lokhande',
                role: 'Space Robotics Co-Managing Director',
                companyRole: '',
                photo: '/team/2025/prasad.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=prasadlokh@gmail.com',
                linkedin: 'https://www.linkedin.com/in/prasad-lokhande-a1591b275'
            },
            {
                id: '2025-t4',
                name: 'Ashwini Lodade',
                role: 'Mechanical Head',
                companyRole: '',
                photo: '/team/2025/ashwini.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ashwinilodade4@gmail.com',
                linkedin: 'https://www.linkedin.com/in/ashwini-lodade-558814259'
            },
            {
                id: '2025-t5',
                name: 'Krushna Hiware',
                role: 'Eletronics Head',
                companyRole: '',
                photo: '/team/2025/krushna.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=hiwarekrishna0@gmail.com',
                linkedin: 'https://www.linkedin.com/in/krushna-hiware-648480259'
            },
            {
                id: '2025-t6',
                name: 'Samiksha Dhurve',
                role: 'Programming Head',
                companyRole: '',
                photo: '/team/2025/samiksha_1.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=samikshadhurve.28@gmail.com',
                linkedin: 'https://www.linkedin.com/in/samiksha-dhurve-8a0793257'
            },
            {
                id: '2025-t7',
                name: 'Om Parekh',
                role: 'Finance Head',
                companyRole: '',
                photo: '/team/2025/om P.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=omparekh425@gmail.com',
                linkedin: 'https://www.linkedin.com/in/om-parekh-365843259'
            },
            {
                id: '2025-t8',
                name: 'Aarya Furade',
                role: 'Networking Head',
                companyRole: '',
                photo: '/team/2025/aarya.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=aaryafurade25@gmail.com',
                linkedin: 'https://www.linkedin.com/in/aarya-furade-537434210'
            },
            {
                id: '2025-t9',
                name: 'Nikhil Jagdale',
                role: 'ROS Lead',
                companyRole: '',
                photo: '/team/2025/nikhil.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=nikhiljagdale200414@gmail.com',
                linkedin: 'https://www.linkedin.com/in/nikhil--jagdale'
            },
            {
                id: '2025-t10',
                name: 'Atharva Dabhade',
                role: 'Computer Vision Lead',
                companyRole: '',
                photo: '/team/2025/atharv dabhade (1).JPG',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=a93054223@gmail.com',
                linkedin: 'https://www.linkedin.com/in/atharav-dabhade-01a814259'
            },
            {
                id: '2025-t11',
                name: 'Harsh Pandharpatte',
                role: 'Content Lead',
                companyRole: '',
                photo: '/team/2025/harsh.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=harsh.pandharpatte22@pccoepune.org',
                linkedin: 'https://www.linkedin.com/in/harsh-pandharpatte-2b5818259'
            },
            {
                id: '2025-t12',
                name: 'Shruti Date',
                role: 'Senior Mechanical Engineer',
                companyRole: '',
                photo: '/team/2025/shruti.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shrutidate2003@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shruti-date-b56813259'
            },
            {
                id: '2025-t13',
                name: 'Ahana Mukhopadhyay',
                role: 'Senior PCB Engineer',
                companyRole: '',
                photo: '/team/2025/ahana.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ahanam37@gmail.com',
                linkedin: ''
            },
            {
                id: '2025-t14',
                name: 'Akshay Wani',
                role: 'Senior Embedded Engineer',
                companyRole: '',
                photo: '/team/2025/wani.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=akshaywani1382004@gmail.com',
                linkedin: 'https://www.linkedin.com/in/akshay-wani2004'
            },
            {
                id: '2025-t15',
                name: 'Moksha Ghorpade',
                role: 'Senior PCB Engineer',
                companyRole: '',
                photo: '/team/2025/moksha.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=mokshaghorpade@gmail.com',
                linkedin: 'https://www.linkedin.com/in/moksha-ghorpade-b22479259'
            },
            {
                id: '2025-t16',
                name: 'Pushkar Walvekar',
                role: 'Senior Embedded Engineer',
                companyRole: '',
                photo: '/team/2025/pushkar.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=pushkar1514@gmail.com',
                linkedin: 'https://www.linkedin.com/in/pushkar-walvekar-2b9818259'
            }
        ],
        "SY Members": [
            {
                id: '2025-s1',
                name: 'Aditya Yadav',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/aditya.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=aditya.yadav3514@gmail.com',
                linkedin: 'https://www.linkedin.com/in/aditya-yadav-20341b308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s2',
                name: 'Adwait Ahirekar',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/adwait.jpg',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=adwait001ahirekar@gmail.com',
                linkedin: 'https://www.linkedin.com/in/adwait-ahirekar-8374a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s3',
                name: 'Atharv Junghare',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/atharv.JPG',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=atharva.junghare2005@gmail.com',
                linkedin: 'https://www.linkedin.com/in/atharva-junghare-681782278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2025-s4',
                name: 'Kalpesh Hatwar',
                role: 'Junior Mechanical Engineer',
                companyRole: '',
                photo: '/team/2025/kalpesh.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=kalpeshhatwar95@gmail.com',
                linkedin: 'https://www.linkedin.com/in/kalpesh-hatwar-51b0b1292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s5',
                name: 'Kshitij Manne',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/kshitij.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=kshitijmanne897@gmail.com',
                linkedin: 'https://www.linkedin.com/in/kshitij-manne-b5852433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s6',
                name: 'Rushikesh Kaldate',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/rushikesh.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=rushikeshkaldate90@gmail.com',
                linkedin: 'https://www.linkedin.com/in/rushikesh-k-1aa225280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s7',
                name: 'Shreyash Jagdale',
                role: 'Junior Mechanical Engineer',
                companyRole: '',
                photo: '/team/2025/shreyash.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyash.jagadale.01@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreyash-jagadale-6930b3292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s8',
                name: 'Sneha Pawar',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/sneha.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=snehapawar8900@gmail.com',
                linkedin: 'https://www.linkedin.com/in/sneha-pawar-43b43a337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s9',
                name: 'Vivek Darekar',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/vivek.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=vivek.darekar07@gmail.com',
                linkedin: 'https://www.linkedin.com/in/vivek-darekar-22b161315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s10',
                name: 'Anushree Narkhede',
                role: 'Junior PCB Engineer',
                companyRole: '',
                photo: '/team/2025/anushree.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=anushreesnarkhede@gmail.com',
                linkedin: 'https://www.linkedin.com/in/anushree-narkhede-7a84a9292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s11',
                name: 'Ayush Deshmane',
                role: 'Junior Embedded Engineer',
                companyRole: '',
                photo: '/team/2025/ayush.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayushdeshmane8001@gmail.com',
                linkedin: 'https://www.linkedin.com/in/ayush-deshmane-5748a2278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s12',
                name: 'Chinmay Patil',
                role: 'Junior Embedded Engineer',
                companyRole: '',
                photo: '/team/2025/chinmay.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=chinmay.patil231@pccoepune.org',
                linkedin: 'http://www.linkedin.com/in/chinmay-patil-a430b0292'
            },
            {
                id: '2025-s13',
                name: 'Devansh Jadhav',
                role: 'Junior Hardware Engineer',
                companyRole: '',
                photo: '/team/2025/devansh.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=devanshjadhav2005@gmail.com',
                linkedin: 'https://www.linkedin.com/in/devansh-jadhav-1889b932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s14',
                name: 'Gauri Tarale',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/gauri.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=gauritarale123@gmail.com',
                linkedin: 'https://www.linkedin.com/in/gauri-tarale-a690b0292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s15',
                name: 'Harshal More',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/harshal.webp',
                email: 'https://mail.google.com/mail/u/0/?fs=1&to=moreharshal279@gmail&tf=cm',
                linkedin: 'https://www.linkedin.com/in/harshal-more-a45489306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s16',
                name: 'Sahil Narkhede',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/sahil.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sahilnarkhede2005@gmail.com',
                linkedin: 'https://www.linkedin.com/in/sahil-narkhede-5b1551292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2025-s17',
                name: 'Piyush Patil',
                role: 'Junior Hardware Engineer',
                companyRole: '',
                photo: '/team/2025/piyush.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=piyushspatil225@gmail.com',
                linkedin: 'https://www.linkedin.com/in/piyush-patil-8630ab292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s18',
                name: 'Shravani Pajgade',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/shravani.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=pajgadeshravani@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shravani-pajgade-ab4169242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            },
            {
                id: '2025-s19',
                name: 'Shreya Zankar',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/shreya (2).webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=shreyazankar021@gmail.com',
                linkedin: 'https://www.linkedin.com/in/shreya-zankar-316602292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s20',
                name: 'Om Jagtap',
                role: 'Junior Programming Engineer',
                companyRole: '',
                photo: '/team/2025/om.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=omjagtap300@gmail.com',
                linkedin: 'https://www.linkedin.com/in/om-jagtap-506a76300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s21',
                name: 'Sujata Swami',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/sujata.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=sujataswami2005@gmail.com',
                linkedin: 'http://www.linkedin.com/in/sujataswami'
            },
            {
                id: '2025-s22',
                name: 'Vardhan Khinvasara',
                role: 'Junior Engineer',
                companyRole: '',
                photo: '/team/2025/vardhan.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=vardhansk18115@gmail.com',
                linkedin: 'https://www.linkedin.com/in/vardhan-khinvasara-9a79a8296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            },
            {
                id: '2025-s23',
                name: 'Yash Sonje',
                role: 'Junior Programming Engineer',
                companyRole: '',
                photo: '/team/2025/yash.webp',
                email: 'https://mail.google.com/mail/?view=cm&fs=1&to=yashsonje123@gmail.com',
                linkedin: 'https://www.linkedin.com/in/yash-sonje-5b6812292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        ],
    },
    2024: {
        groupPhoto: '/gallery/img3.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2023: {
        groupPhoto: '/gallery/img5.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2022: {
        groupPhoto: '/team/2022/group.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2021: {
        groupPhoto: '/team/2021/group.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2020: {
        groupPhoto: '/team/2020/group.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2019: {
        groupPhoto: '/gallery/img1.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2018: {
        groupPhoto: '/gallery/2018 TEAM PHOTO.JPG', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2017: {
        groupPhoto: '/gallery/2017_team.JPG', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2016: {
        groupPhoto: '/team/2016/group.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2015: {
        groupPhoto: '/gallery/2015 TEAM PHOTO.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    2014: {
        groupPhoto: '/gallery/2014 TEAM PHOTO.jpg', // Placeholder - user needs to add correct path
        "BTech Members": [],
        "TY Members": [],
        "SY Members": []
    },
    // Add other years...
};

export default function TeamPage() {
    const [selectedYear, setSelectedYear] = useState(2026);

    const yearData = TEAM_DATA[selectedYear] || { "BTech Members": [], "TY Members": [], "SY Members": [] };
    const categories = ["BTech Members", "TY Members", "SY Members"];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-800/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
            </div>

            <Navbar />

            <div className="pt-24 relative z-10 pb-20">

                {/* Timeline - Sticky */}
                <TeamTimeline selectedYear={selectedYear} onYearSelect={setSelectedYear} />

                {/* Team Roster */}
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-20 min-h-[60vh]">

                    {/* Group Photo Section */}
                    {yearData.groupPhoto && (
                        <div className="mb-24 flex justify-center animate-slide-up">
                            <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-purple-500/30">
                                <img
                                    src={getCloudinaryUrl(yearData.groupPhoto)}
                                    alt={`Team Automatons ${selectedYear}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback if image fails
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                                    <h2 className="text-3xl font-bold text-white mb-2">Team {selectedYear}</h2>
                                    <p className="text-purple-300">Building the Future Together</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {categories.map((category) => {
                        const members = yearData[category] || [];
                        if (members.length === 0) return null;

                        return (
                            <div key={category} className="mb-24">
                                <h2 className="text-3xl font-bold text-white mb-12 border-l-4 border-purple-500 pl-4">{category}</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                                    {members.map((member, index) => (
                                        <div
                                            key={member.id}
                                            className="w-full animate-slide-up"
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <TeamProfileCard
                                                name={member.name}
                                                role={member.role}
                                                photo={member.photo}
                                                email={member.email}
                                                linkedin={member.linkedin}
                                                companyRole={member.companyRole}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>

            <OpenSourceSection />
            <Footer />
        </div>
    );
}
