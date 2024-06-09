export const validatePassword = (password: string): boolean => {
    const minLength = /.{8,}/;
    const hasLetter = /[a-zA-Z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    return (
        minLength.test(password) &&
        hasLetter.test(password) &&
        hasNumber.test(password) &&
        hasSpecialChar.test(password)
    );
};

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};