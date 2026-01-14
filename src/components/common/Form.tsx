import React, { Children, type ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  btnText: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, title, description, btnText, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-3xl pb-3">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div className="flex flex-col gap-5 pt-6">
        {children}
        <Button type="submit" className="px-10">
          {btnText}
        </Button>
      </div>
    </form>
  );
};

export default Form;
