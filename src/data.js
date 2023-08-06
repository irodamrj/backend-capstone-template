const ROUTES = {
  COOK_PROFILE: '/api/cooker',
  COOK_ORDERS: '/api/cooker/orders',
  COOK_DISHES: '/api/cooker/dishes',
  COOK_PAYMENT: '/api/cooker/paymentType',
  COOK_LOGIN: '/api/auth/cooker/login',
  COOK_SIGNUP: '/api/auth/cooker/signup',
  CUSTOMER_GOOGLE:'/api/auth/customer/google',
  CUSTOMER_PROFILE:'/api/customer/',
  CUSTOMER_CART:'/api/customer/cart',
  CUSTOMER_LOGIN: '/api/auth/customer/login',
  CUSTOMER_SIGNUP: '/api/auth/customer/signup',
  CUSTOMER_ORDERS: '/api/customer/order',
  CUSTOMER_CART: '/api/customer/cart',
  ADMIN_LOGIN: '/api/auth/admin/login',
  ADMIN_COOKER: '/api/admin/cooker',  
  ADMIN_CUSTOMER: '/api/admin/customer',
  ADMIN_ORDER: '/api/admin/order',
  ADMIN_CUSTOMERS: '/api/admin/customers',
  ADMIN_COOKERS: '/api/admin/cookers',
  ADMIN_DISHES: '/api/admin/dishes',
  PUBLIC_HOME: '/home',
  PUBLIC_DISH: '/home/dish',
  PUBLIC_ABOUT: '/home/about',
  PUBLIC_COOKERS: '/home/cookers',

 


};

const items = { itemId: ['64caa71b777867d29fd25bce'] };

const customer1 = {
  email: 'iroda@gmail.com',
  password: '123456',
};

const wrongAdmin = {
  username: 'test',
  password: '123456',
};
const admin = {
  username: 'admin',
  password: '123456',
};
const comments = {
  rating: 2.3,
  commentText: 'not Good Service',
};

const user1 = {
  email: 'first@gmail.com',
  password: '123456',
};

const incorrectUser = {
  email: 'noexistent@gmail.com',
  password: '2346888',
};

const userSignup = {
  username: 'Tashkent restaurant',
  email: 'new@gmail.com',
  password: '123456',
  address: {
    country: 'Uzbekistan',
    city: 'Tashkent',
    state: 'UZ',
    zipcode: 12345,
    street: 'Main Street',
    buildingNumber: 123,
    buildingName: 'ABC Building',
    flatNumber: 4,
    floor: 2,
  },
  phoneNumber: '1254566522',
  aboutCooker: 'about cooker',
  openingHour: '08.00',
  closingHour: '24.00',
};

//customer data
const customer = {
  email: 'iroda@gmail.com',
  password: '123456',
};

const customerSignup = {
  firstName: 'sara',
  lastName: 'yılmaz',
  email: 'test@gmail.com',
  password: '123456',
};

module.exports = {
  ROUTES,
  user1,
  incorrectUser,
  userSignup,
  customer1,
  customerSignup,
  items,
  comments,
  admin,
  wrongAdmin
};
