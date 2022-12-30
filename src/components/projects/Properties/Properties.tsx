import { Field } from "@prisma/client";
import { ChangeEvent } from "react";
import FormTextInput from "../../common/Form/FormTextInput";
import ModalContainer from "../../common/Modal/ModalContainer";
import PropertiesFormContainer from "../PropertiesForm/PropertiesFormContainer";
import { HiPlus } from "react-icons/hi";

type Props = {
  fields: any[] | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  createField: (
    name: string,
    categoryId: string,
    type: "string" | "textarea" | "number" | "boolean" | "image",
    content: any
  ) => void;
  toggleModal: () => void
};

const Properties = ({ fields, onChange, createField, toggleModal }: Props) => {
  return (
    <div className="m-2 h-full relative flex flex-col max-h-[calc(50vh-8rem)] w-full overflow-y-scroll rounded-md border p-2 dark:border-gray-700 sm:max-h-[calc(100vh-14rem)] scrollbar-thin">
      <form className="">
        <h3 className="my-4 w-full text-center text-2xl">Properties</h3>
        {fields?.map((field) => (
          <div key={field.data.id} className="py-2">
            <label className="px-4" htmlFor={field}>
              {field.name}
            </label>
            <br />
            <FormTextInput
              id={field.id}
              name={field.name}
              onChange={onChange}
              placeholder={field.name}
              value={field.data.content}
            />
          </div>
        ))}
      </form>
      <button onClick={toggleModal} className='btn-1 my-2 sm:absolute sm:bottom-2 flex self-center items-center justify-center w-1/3 max-w-xs'><HiPlus/></button>
      <ModalContainer child={<PropertiesFormContainer/>} modal="createField" />
    </div>
  );
};

export default Properties;
