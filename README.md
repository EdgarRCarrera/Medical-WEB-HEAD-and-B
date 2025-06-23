# 🏥 eDoc - Medical Appointment System

> A comprehensive web-based medical appointment booking system built with PHP and MySQL

![PHP](https://img.shields.io/badge/PHP-7.3+-777BB4?style=flat-square&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-5.7+-4479A1?style=flat-square&logo=mysql&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

## 📋 Overview

eDoc is a modern, responsive web application designed to streamline medical appointment management. It provides separate interfaces for administrators, doctors, and patients, enabling efficient healthcare service delivery through digital channels.

### ✨ Key Features

- **👤 Multi-User System**: Separate dashboards for Admin, Doctors, and Patients
- **📅 Appointment Management**: Complete booking, scheduling, and management system
- **🏥 Doctor Profiles**: Comprehensive doctor information with specialties
- **👥 Patient Registration**: Self-service patient account creation
- **📊 Analytics Dashboard**: System statistics and reporting
- **📱 Responsive Design**: Mobile-friendly interface
- **🔐 Secure Authentication**: Role-based access control

## 🚀 Demo

### Default Login Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `admin@edoc.com` | `123` |
| **Doctor** | `doctor@edoc.com` | `123` |
| **Patient** | `patient@edoc.com` | `123` |

## 📁 Project Structure

```
eDoc/
├── 📄 index.html              # Landing page
├── 🔐 login.php               # User authentication
├── 📝 signup.php              # Patient registration
├── 👤 create-account.php      # Account creation
├── 🚪 logout.php              # User logout
├── 🔗 connection.php          # Database connection
├── 👑 admin/                  # Admin dashboard & management
├── 👨‍⚕️ doctor/                 # Doctor interface & tools
├── 🤒 patient/                # Patient portal & booking
├── 🎨 css/                    # Stylesheets & animations
├── 🖼️ img/                     # Images & assets
├── 📷 Screenshots/            # Application screenshots
├── 🗄️ SQL_Database_edoc.sql   # Database schema
├── 🐳 docker-compose.yml      # Docker configuration
└── 📋 Dockerfile             # Container setup
```

## 🛠️ Installation

### Prerequisites

- **PHP 7.3+**
- **MySQL 5.7+**
- **Web Server** (Apache/Nginx)
- **XAMPP/WAMP/LAMP** (for local development)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/NeoNemesis/mina_blocks.php.git
   cd mina_blocks.php
   ```

2. **Database Setup**
   ```sql
   -- Create database
   CREATE DATABASE edoc;
   
   -- Import schema
   mysql -u your_username -p edoc < SQL_Database_edoc.sql
   ```

3. **Configure Database Connection**
   ```php
   // Update connection.php with your credentials
   $servername = "localhost";
   $username = "your_username";
   $password = "your_password";
   $dbname = "edoc";
   ```

4. **Start Your Server**
   ```bash
   # For XAMPP users
   # Place project in htdocs folder and start Apache & MySQL
   
   # Access via browser
   http://localhost/your-project-folder/
   ```

### 🐳 Docker Setup

```bash
# Build and run with Docker
docker-compose up -d

# Access application
http://localhost:8080
```

## 👥 User Roles & Capabilities

### 🔑 Administrator
- **Full System Control**: Manage all users and appointments
- **Doctor Management**: Add, edit, delete doctor profiles
- **Patient Oversight**: View and manage patient accounts
- **System Analytics**: Access to comprehensive reporting
- **Schedule Management**: Create and manage doctor schedules

### 👨‍⚕️ Doctor
- **Personal Schedule**: Manage availability and time slots
- **Appointment View**: See all assigned appointments
- **Patient Information**: Access patient details and history
- **Profile Management**: Update personal information and specialties

### 🤒 Patient
- **Easy Booking**: Search and book appointments with doctors
- **Appointment History**: View past and upcoming appointments
- **Profile Management**: Update personal information
- **Doctor Search**: Find doctors by specialty

## 🏥 Medical Specialties

The system includes **55+ medical specialties**:

- Accident and Emergency Medicine
- Cardiology
- Dermatology
- Endocrinology
- General Practice
- Internal Medicine
- Pediatrics
- Surgery
- *...and many more*

## 📊 Features Breakdown

### 🎯 Core Functionality
- **Appointment Booking System**
- **User Authentication & Authorization**
- **Medical Specialty Management**
- **Doctor Schedule Management**
- **Patient Registration Portal**
- **Administrative Dashboard**

### 🔐 Security Features
- **Session Management**
- **SQL Injection Prevention**
- **Role-Based Access Control**
- **Input Validation**
- **Secure Password Handling**

### 📱 User Experience
- **Responsive Design**
- **Intuitive Navigation**
- **Clean, Modern Interface**
- **Fast Loading Times**
- **Cross-Browser Compatibility**

## 🖼️ Screenshots

| Admin Dashboard | Doctor Interface | Patient Portal |
|----------------|------------------|----------------|
| ![Admin](Screenshots/Screenshot%20(3).png) | ![Doctor](Screenshots/Screenshot%20(9).png) | ![Patient](Screenshots/Screenshot%20(6).png) |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### 📝 Coding Standards
- Follow PSR-12 coding standards for PHP
- Use meaningful variable and function names
- Comment complex logic thoroughly
- Test all new features before submission

## 🐛 Issues & Support

- **Bug Reports**: Create an issue with detailed reproduction steps
- **Feature Requests**: Propose new features via GitHub issues
- **Security Issues**: Report privately via email

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

### 🔄 Current Development
- [ ] Email notification system
- [ ] PDF report generation
- [ ] Advanced search filters
- [ ] Calendar integration
- [ ] Mobile app development

### 🚀 Future Enhancements
- [ ] Telemedicine integration
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] API development
- [ ] Advanced analytics

## 👨‍💻 Author

**NeoNemesis**
- GitHub: [@NeoNemesis](https://github.com/NeoNemesis)
- Repository: [mina_blocks.php](https://github.com/NeoNemesis/mina_blocks.php)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by real healthcare management needs
- Community-driven development approach
- Open source contribution friendly

---

<div align="center">

**⭐ Star this repository if it helped you!**

[Report Bug](https://github.com/NeoNemesis/mina_blocks.php/issues) · [Request Feature](https://github.com/NeoNemesis/mina_blocks.php/issues) · [Documentation](https://github.com/NeoNemesis/mina_blocks.php/wiki)

</div>

---

> *Making healthcare more accessible through technology* 🏥✨



