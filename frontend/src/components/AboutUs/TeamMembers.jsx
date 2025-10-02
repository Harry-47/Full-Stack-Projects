import { useRef} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
    { id: 1, name: 'Abu Huraira', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 2, name: 'Sana Malik', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 3, name: 'Zohaib Khan', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1544725176-7c40e6a71c4c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 4, name: 'Mahnoor Ali', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1546961342-ea58838b9391?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 5, name: 'Ali Rizvi', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1531427186611-ad7755543c8d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
    { id: 6, name: 'Ayesha Khan', role: 'Customer Support', image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
];

const TeamCarousel = () => {
    const carouselRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: carouselRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Adjust this based on content length

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-12"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Meet Our Creative Team
                </motion.h2>
                <motion.div
                    ref={carouselRef}
                    className="relative w-full overflow-hidden"
                    style={{ height: '300px' }}
                >
                    <motion.div
                        className="flex gap-8 py-4 cursor-grab"
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 0 }}
                    >
                        {teamMembers.map(member => (
                            <motion.div
                                key={member.id}
                                className="flex flex-col items-center flex-shrink-0 w-64 p-6 bg-white rounded-3xl shadow-lg"
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-black border-opacity-20"
                                />
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamCarousel;