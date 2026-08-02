const PasswordStrengthChecker = ({ password, passwordFocused }) => {
  if (!passwordFocused || !password) return null;

  const calculateStrength = (password) => {
    const hasLength = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    const final =
      hasLength + hasLowercase + hasUppercase + hasNumber + hasSpecial;
    return final;
  };

  let COLORS = {
    0: "",
    1: "bg-red-700",
    2: "bg-red-700",
    3: "bg-yellow-700",
    4: "bg-green-700",
    5: "bg-green-700",
  };

  const strength = calculateStrength(password);

  let color = COLORS[strength];

  return (
    <div className="flex mt-3 gap-2 ml-0.5 items-center">
      {[1, 2, 3].map((bar) => {
        return (
          <div
            key={bar}
            className={`h-1 w-27 transition-all duration-500 ease-in-out transition-colors ${bar <= strength ? color : "bg-gray-300"} rounded-full`}
          ></div>
        );
      })}
      {strength >= 4 ? (
        <p className="text-green-700">strong</p>
      ) : strength == 3 ? (
        <p className="text-yellow-300">medium</p>
      ) : strength > 0 ? (
        <p className="text-red-700">weak</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
