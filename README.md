# Patient Management System Backend

A RESTful API backend for the Patient Management System, built with Node.js, Express, and MongoDB.

## Features

- 🚀 **RESTful API**: Complete CRUD operations for patient management
- 🔒 **Secure APIs**: Input validation and error handling
- 📝 **Data Validation**: Mongoose schema validation
- 🌐 **CORS Enabled**: Cross-origin resource sharing for frontend integration
- 📊 **MongoDB Integration**: Efficient data storage and retrieval
- ⚡ **Express.js**: Fast and minimalist web framework

## Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas for cloud)
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gahamanyiced/patient-management-system-backend-node.js.git
   cd patient-management-system-backend-node.js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start running at `http://localhost:8000`

## Project Structure

```
patient-management-system-backend-node.js/
├── src/
│   ├── controllers/          # Route controllers
│   │   └── patientController.js
│   ├── models/              # MongoDB models
│   │   └── Patient.js
│   ├── routes/              # API routes
│   │   └── patientRoute.js
│   ├── config/              # Configuration files
│   │   └── db.js            # MongoDB connection
│   └── ...
├── app.js                   # Express app setup
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/v1/patient` | Get all patients | - |
| POST | `/api/v1/patient` | Create new patient | `{ name, address, diagnosis, treatment, history }` |
| GET | `/api/v1/patient/:id` | Get single patient | - |
| PUT | `/api/v1/patient/:id` | Update patient | `{ name, address, diagnosis, treatment, history }` |
| DELETE | `/api/v1/patient/:id` | Delete patient | - |

## Data Model

### Patient Schema

```javascript
{
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: true
  },
  history: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## Response Format

All API responses follow this structure:

```javascript
{
  success: boolean,
  data: {},          // Response data
  message: string    // Success/error message
}
```

## Available Scripts

### `npm run dev`

Runs the server with nodemon for development. The server will restart when you make changes.

### `npm start`

Runs the server in production mode.

### `npm test`

Runs the test suite (when implemented).

## Dependencies

### Main Dependencies
- **express**: Web framework for Node.js
- **mongoose**: MongoDB object modeling
- **cors**: CORS middleware
- **morgan**: HTTP request logger

### Development Dependencies
- **nodemon**: Auto-restart server on file changes

## CORS Configuration

The API is configured to accept requests from:
- Origin: `http://localhost:3000` (React frontend)
- Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS

## Error Handling

The API includes comprehensive error handling for common scenarios:

- **404 Not Found**: Resource not found
- **400 Bad Request**: Invalid input data
- **500 Internal Server Error**: Server errors

Example error response:
```javascript
{
  success: false,
  error: "Patient not found"
}
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   ```
   Error: connect ECONNREFUSED 127.0.0.1:27017
   ```
   - Ensure MongoDB is running locally

2. **Port Already in Use**
   ```
   Error: listen EADDRINUSE: address already in use :::8000
   ```
   - Modify the PORT in `app.js` file
   - Check if another process is using port 8000

3. **CORS Issues**
   - Ensure your frontend is running on `http://localhost:3000`
   - Check if frontend is using the correct API endpoint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Gahamanyi CEd - gahamacedr@gmail

Project Link: [https://github.com/Gahamanyiced/patient-management-system-backend-node.js](https://github.com/Gahamanyiced/patient-management-system-backend-node.js)

## Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)