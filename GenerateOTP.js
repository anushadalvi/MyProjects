function generateOTP() 
{
    const otpLength = 6;
    const otp = Math.floor(Math.random() * Math.pow(10, otpLength)).toString().padStart(otpLength, '0');
    return otp;
}

function displayOTP()
{
    const otpDisplay = document.getElementById('otp-display');
    otpDisplay.textContent = generateOTP();
}