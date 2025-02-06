import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../Hooks/useIntersectionObserver';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'HR Management System',
        description: " This HR Management system is designed to manage various HR functions efficiently. The system has two main roles: **Admin** and **Employee**LOGIN ADMIN PANEL CREDENTIALS USERNAME:brain@gmail.com PASSWORD:Brain@1990",
        link: 'https://hrmanagementsystemversion.netlify.app/',
        image: '/hrmanagement system.png',
        githubFrontend: 'https://github.com/MARIATITUSRAJ/Capstone-F.git',
        githubBackend: 'https://github.com/MARIATITUSRAJ/Capstone-B.git'
    },
    {
        id: 2,
        title: 'E Commerce App',
        description: " Dynamic and Colorful Frontend Experience  Crafted an engaging and visually appealing E Commerce app with a lively and intuitive interface. Leveraged React to create a smooth and interactive experience for users to effortlessly order and filter their favorite dresses. Features include an animated cart, category-based item selection, and a sleek, colorful design that enhances the user journey from browsing to checkout.",
        link: 'https://ecomtrendz.netlify.app/',
        image: '/ecomapp.png',
        githubFrontend: 'https://github.com/MARIATITUSRAJ/E_Com_Frontent.git',
        githubBackend: 'https://github.com/MARIATITUSRAJ/E_Com_Backend.git'
    },
   
    {
        id: 3,
        title: 'Gas Booking App',
        description: " At Giant Power, we're committed to transforming the way you refuel. Our innovative gas slot booking app is designed to eliminate the hassles of traditional refueling by providing a seamless, efficient, and stress-free experience.",
        link: 'https://gasslotbookingapp.netlify.app/',
        image: '/gasslotbooking app.png',
        githubFrontend: 'https://github.com/MARIATITUSRAJ/CAPSTONEFD.git',
        githubBackend: 'https://github.com/MARIATITUSRAJ/CAPSTONEBD.git'
    }

    // Add more projects as needed
];

const Projects = () => {
    const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <motion.section
            ref={containerRef}
            id="projects"
            className="projects-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
        >
            <h2 className="projects-title">My Projects</h2>
            <motion.div
                className="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: project.id * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="project-button">Visit Page</button>
                        </a>
                        <div className="project-buttons">
                            <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                                <button className="project-button">GitHub Frontend</button>
                            </a>
                            <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                                <button className="project-button">GitHub Backend</button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Projects;
