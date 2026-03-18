import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonialimg1.png"
import testimonial_image_2 from "./testimonialimg2.png"
import testimonial_image_3 from "./testimonialimg3.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.jpg"
import car_image6 from "./car_image6.png"
import car_image7 from "./car_image7.png"
import car_image8 from "./car_image8.png"
import car_image9 from "./car_image9.png"
import car_image10 from "./car_image10.png"
import car_image11 from "./car_image11.png"
import car_image12 from "./car_image12.png"
import car_image13 from "./car_image13.png"
import car_image14 from "./car_image14.png"
import car_image15 from "./car_image15.png"


export const cityList = ['Dwarka', 'Lajpat Nagar', 'Majnu Ka Tila', 'Rohini', 'Khan Market', 'Greater Kailash', 'Saket', 'Janakpuri', 'CP']

export const assets = {
    logo,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Arnav",
  "email": "admin@example.com",
  "role": "owner",
  "image": user_profile,
}

export const dummyCarData = [
  {
    "_id": "c1",
    "owner": "user1",
    "brand": "BMW",
    "model": "X5",
    "image": car_image1,
    "year": 2020,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 8500,
    "location": "South Delhi",
    "description": "Luxury SUV with premium comfort and performance.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c2",
    "owner": "user1",
    "brand": "Audi",
    "model": "Q7",
    "image": car_image2,
    "year": 2019,
    "category": "SUV",
    "seating_capacity": 7,
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "pricePerDay": 9000,
    "location": "Dwarka, Delhi",
    "description": "Spacious luxury SUV for family trips.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c3",
    "owner": "user1",
    "brand": "Toyota",
    "model": "Fortuner",
    "image": car_image3,
    "year": 2021,
    "category": "SUV",
    "seating_capacity": 7,
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "pricePerDay": 5500,
    "location": "Rohini, Delhi",
    "description": "Powerful SUV ideal for long highway drives.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c4",
    "owner": "user1",
    "brand": "Hyundai",
    "model": "Creta",
    "image": car_image4,
    "year": 2022,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 3200,
    "location": "Saket, Delhi",
    "description": "Comfortable compact SUV for city use.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c5",
    "owner": "user1",
    "brand": "Honda",
    "model": "City",
    "image": car_image5,
    "year": 2021,
    "category": "Sedan",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "pricePerDay": 2800,
    "location": "Lajpat Nagar, Delhi",
    "description": "Reliable sedan with great mileage.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c6",
    "owner": "user1",
    "brand": "Maruti",
    "model": "Swift",
    "image": car_image6,
    "year": 2020,
    "category": "Hatchback",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "pricePerDay": 1800,
    "location": "Janakpuri, Delhi",
    "description": "Budget-friendly hatchback for daily rides.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c7",
    "owner": "user1",
    "brand": "Tata",
    "model": "Nexon",
    "image": car_image7,
    "year": 2022,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Diesel",
    "transmission": "Automatic",
    "pricePerDay": 3000,
    "location": "Karol Bagh, Delhi",
    "description": "Safe and compact SUV with modern features.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c8",
    "owner": "user1",
    "brand": "Mahindra",
    "model": "Thar",
    "image": car_image8,
    "year": 2023,
    "category": "SUV",
    "seating_capacity": 4,
    "fuel_type": "Diesel",
    "transmission": "Manual",
    "pricePerDay": 4500,
    "location": "Noida, Delhi NCR",
    "description": "Off-road SUV with rugged design.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c9",
    "owner": "user1",
    "brand": "Kia",
    "model": "Seltos",
    "image": car_image9,
    "year": 2022,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 3300,
    "location": "Vasant Kunj, Delhi",
    "description": "Stylish SUV with premium interiors.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c10",
    "owner": "user1",
    "brand": "Skoda",
    "model": "Slavia",
    "image": car_image10,
    "year": 2023,
    "category": "Sedan",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 3500,
    "location": "Connaught Place, Delhi",
    "description": "Premium sedan with smooth driving experience.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c11",
    "owner": "user1",
    "brand": "Mercedes",
    "model": "C-Class",
    "image": car_image11,
    "year": 2021,
    "category": "Luxury Sedan",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 9500,
    "location": "Greater Kailash, Delhi",
    "description": "Luxury sedan for premium experience.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c12",
    "owner": "user1",
    "brand": "Volkswagen",
    "model": "Virtus",
    "image": car_image12,
    "year": 2022,
    "category": "Sedan",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "pricePerDay": 3100,
    "location": "Pitampura, Delhi",
    "description": "Sporty sedan with solid build quality.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c13",
    "owner": "user1",
    "brand": "Renault",
    "model": "Kiger",
    "image": car_image13,
    "year": 2021,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Manual",
    "pricePerDay": 2400,
    "location": "Uttam Nagar, Delhi",
    "description": "Compact SUV suitable for city driving.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c14",
    "owner": "user1",
    "brand": "MG",
    "model": "Hector",
    "image": car_image14,
    "year": 2022,
    "category": "SUV",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 4200,
    "location": "Indirapuram, Delhi NCR",
    "description": "Feature-loaded SUV with spacious cabin.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
  {
    "_id": "c15",
    "owner": "user1",
    "brand": "Maruti",
    "model": "Baleno",
    "image": car_image15,
    "year": 2023,
    "category": "Hatchback",
    "seating_capacity": 5,
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "pricePerDay": 2200,
    "location": "Rajouri Garden, Delhi",
    "description": "Comfortable hatchback with good mileage.",
    "isAvailable": true,
    "createdAt": "2025-04-16",
  },
];


export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 4400,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 1300,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 6000,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 4400,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 8400
}