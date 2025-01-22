import '../css/ProjectDetails.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProjectDetails = () => {
    const { id } = useParams(); // מזהה הפרויקט מהנתיב
    const [project, setProject] = useState(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const API_URL = `http://localhost:3001/api/project/${id}`; // כתובת ה-API
    const API_URL_PRODUCT = `http://localhost:3001/api/product`; // כתובת ה-API

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setProject(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        axios.get(API_URL_PRODUCT)
            .then((response) => {
                setProduct(response.data);
                console.log(response.data);
                console.log(response.data[0].nameOfProduct);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleNextImage = () => {
        if (project && project.images) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }
    };

    const handlePrevImage = () => {
        if (project && project.images) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex - 1 + project.images.length) % project.images.length
            );
        }
    };

    const handleImageSelect = (index) => {
        setCurrentImageIndex(index);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="project-details-container">
            {project && (
                <>
                    {/* Left Side - Main Image */}
                    <div className="carousel-container">
                        <div className="main-image-container">
                            <button className="arrow left-arrow" onClick={handlePrevImage}>
                                &#10094;
                            </button>
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                                className="main-image"
                            />
                            <button className="arrow right-arrow" onClick={handleNextImage}>
                                &#10095;
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Project Details */}
                    <div className="project-info">
                        <h1 className="project-title">{project.nameOfProject}</h1>
                        <p className="project-date-location">
                            <strong>Date:</strong> {project.projectCreationDate}<br />
                            <strong>Location:</strong> {project.location}
                        </p>
                        <p className="project-architect">
                            <strong>Architect:</strong> {project.architect}
                        </p>
                        <p className="project-description">{project.description}</p>

                        {/* Thumbnail Gallery */}
                        <div className="thumbnail-gallery">
                            <h2>Gallery</h2>
                            <div className="thumbnail-container">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail"
                                        onClick={() => handleImageSelect(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="product-cards">
    <h2>Integrated Products</h2>
    <div className="product-card-container">
        {project.combinedProducts &&
            project.combinedProducts.map((p, index) => {
                // בדיקת האם המידע זמין
                const currentProduct = product && product[index]; // או דרך אחרת לגשת למוצר
                if (!currentProduct) {
                    return (
                        <Card key={index} className="product-card">
                            <Card.Body>
                                <Card.Title>Unknown Product</Card.Title>
                                <Card.Text>No data available</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                }
                return (
                    <Link
                        key={currentProduct._id}
                        to={`/products/${currentProduct._id}`}
                        className="product-card-link"
                    >
                        <Card className="product-card">
                            <Card.Img
                                variant="top"
                                src={currentProduct.images && currentProduct.images[0]}
                                alt={currentProduct.nameOfProduct || "Product Image"}
                                className="product-thumbnail"
                            />
                            <Card.Body>
                                <Card.Title>{currentProduct.nameOfProduct || "Unknown Product"}</Card.Title>
                                <Card.Text>
                                    <strong>Price:</strong> {currentProduct.price || "N/A"} ₪
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                );
            })}
    </div>
</div>

                        
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectDetails;
