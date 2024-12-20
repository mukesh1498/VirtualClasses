const BASE_URL = "http://localhost:5000/v1";
console.log("base url", BASE_URL);

// CATAGORIES API
export const categories = {
  ALL_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
};

export const allInstructor = {
  ALL_INSTRUCTOR_API: BASE_URL + "/AllInstructor/ShowAllInstructor",
};

export const PaymentEndPoint = {
  CREATEORDER_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  VERIFY_PAYMENT_API: BASE_URL + "/payment/verifyPayment",
  SENDPAYMENT_SUCCES_MAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
};
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
};

export const ProfileEndPoint = {
  GET_USER_ENROLLED_COURES: BASE_URL + "/profile/getEnrolledCourses",
};

export const AuthEndPoint = {
  SENDOTP_API: BASE_URL + "/auth/sendOtp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/Login",
  RESETPASSWORDTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
};
// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTUTRE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PERSONAL_DETAIL: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changePassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  // COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
};
