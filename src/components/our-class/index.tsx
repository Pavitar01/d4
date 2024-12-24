'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import CourseDetails from './details-card';
import { Class1, Class2, Class3, Class4 } from '@/assets';
import './styles.css';

const courses = [
  {
    title: "Lyrical",
    image: Class1,
    difficulty: "Beginner",
    rating: "4.5/5",
    fees: "$150",
    enroll: "Enroll Now",
    type: "Online",
  },
  {
    title: "Hip Hop",
    image: Class2,
    difficulty: "Intermediate",
    rating: "4.8/5",
    fees: "$200",
    enroll: "Enroll Now",
    type: "Offline",
  },
  {
    title: "Contemporary",
    image: Class3,
    difficulty: "Advanced",
    rating: "4.7/5",
    fees: "$250",
    enroll: "Enroll Now",
    type: "Hybrid",
  },
  {
    title: "Animation",
    image: Class4,
    difficulty: "Advanced",
    rating: "4.7/5",
    fees: "$250",
    enroll: "Enroll Now",
    type: "Hybrid",
  },
];

const OurClass = () => {
  return (
    <Box className="our-class-container">
      <Typography variant="h4" className="our-class-title" gutterBottom>
        Our Classes
      </Typography>
      <Box className="course-grid">
        {courses.map((course, index) => (
          <CourseDetails
            key={index}
            title={course.title}
            image={course.image}
            difficulty={course.difficulty}
            rating={course.rating}
            fees={course.fees}
            enroll={course.enroll}
            type={course.type}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OurClass;
