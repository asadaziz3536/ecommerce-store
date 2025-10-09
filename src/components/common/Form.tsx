import React, { Children, type ReactNode } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  btnText: string;
  onBtnClick:()=>void
}

const Form = ({ children, title, description, btnText, onBtnClick }: Props) => {
  return (
    <form>
      <h1 className="text-3xl pb-3">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <form   className="flex flex-col gap-5 pt-6">
        {children}
        <Button className="px-10" onClick={onBtnClick}>{btnText}</Button>
      </form>
    </form>
  );
};

export default Form;
