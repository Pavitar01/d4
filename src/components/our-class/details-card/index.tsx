'use client';
import { Typography, Box, Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './styles.css';


interface IProps {
    title: string;
    image: string | StaticImageData;
    difficulty: string;
    rating: string;
    fees: string;
    enroll: string;
    type: string
}

const CourseDetails: React.FC<IProps> = ({ difficulty, rating, fees, enroll, image, title }) => {
    const ratingValue = parseFloat(rating);
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    const emptyStars = 5 - Math.ceil(ratingValue);
    return (
        <Box className="class-grid-container">
            <Image
                src={image}
                alt="Course"
                className="course-image"
            />
            <Box className="class-details-wrapper">
                <Typography variant="h4" sx={{ fontSize: "16px" }} className="details-title">
                    {title}
                </Typography>
                <Typography variant='body1'  sx={{ fontSize: "8px" }} className="details-item" component="p">
                    {difficulty}
                </Typography>
                <Typography className="details-item" fontSize={"18px"} display={"flex"} gap={1.5}>
                    {Array.from({ length: fullStars }, (_, i) => (
                        <StarIcon key={`full-${i}`} fontSize='inherit' />
                    ))}
                    {hasHalfStar && <StarHalfIcon key="half-star" fontSize='inherit' />}
                    {Array.from({ length: emptyStars }, (_, i) => (
                        <StarIcon key={`empty-${i}`} sx={{ color: 'lightgray', fontSize: 'inherit' }} />
                    ))}
                </Typography>
                <Typography className="details-item">
                    <span>Fees:</span>
                    <span>{fees}</span>
                </Typography>
                <Button variant='text' color='inherit' className="enroll-button">
                    Enroll Now
                </Button>
            </Box>
        </Box>
    );
};

export default CourseDetails;

