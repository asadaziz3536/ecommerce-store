import { useRef } from "react";
import { Input } from "./input";

export default function OTPInput() {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // keep only digits
    e.target.value = value;

    if (value && index < inputsRef.current.length - 1) {
      // focus next input
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // prevent default behavior
      if (inputsRef.current[index].value === "" && index > 0) {
        // move to previous input if current is empty
        inputsRef.current[index - 1]?.focus();
        inputsRef.current[index - 1].value = "";
      } else {
        // clear current input
        inputsRef.current[index].value = "";
      }
    }
  };

  return (
    <div className="flex gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Input
          key={i}
          type="text"
          maxLength={1}
          className="py-6 border-black text-center font-bold"
          ref={(el) => {
            inputsRef.current[i] = el!;
          }}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}
