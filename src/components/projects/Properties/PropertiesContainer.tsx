import { ChangeEvent, useState, useContext } from "react";
import Properties from "./Properties";
import { Category } from "@prisma/client";
import { createField, getFields } from "../../../utils/apiFunctions";
import { ModalContextProvider } from "../../../contexts/ModalsContext";

type Props = {
  category: Category | null;
};

const PropertiesContainer = ({ category }: Props) => {
  const {
    data: fields,
    isLoading,
    error,
    refetch,
  } = getFields(category ? category.id : null);

  const [inputValue, setInputValue] = useState<{
    [input: string]: string | number | boolean;
  }>();

  type TCleanObjArr = {
    [name: string]: {
      [name: string]: string | number | boolean;
    }[];
  }[];

  let CleanObjArr: TCleanObjArr = [];
  let CategoryName: string;
  let FieldName: string;
  let Fields: any[] = [];

  type TInitFields = typeof fields;

  const removeNulFields = (objectArr: TInitFields) => {
    let FieldName: string;
    let Fields: any[] = [];

    fields?.forEach((field) => {
      FieldName = field.name;
      const values = Object.values(field).filter(
        (val) => val !== null && val !== field.name && val !== field.id
      );
      values.forEach((value) => {
        Fields.push({ name: field.name, data: value });
      });
    });

    return Fields;
  };

  const fFields = removeNulFields(fields);

  const newField = createField();

  const _createField = (
    name: string,
    categoryId: string,
    type: "string" | "textarea" | "number" | "boolean" | "image",
    content: any
  ) => {
    // if (category) {
    //   newField.mutateAsync({ name, categoryId, type, content });
    // }
  };

  const {setModals} = useContext(ModalContextProvider)

    const toggleModal = () =>{
    if(setModals){
      setModals((prev)=> ({ ...prev, createField: {isOpen: true}}))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return <Properties fields={fFields} onChange={handleChange} createField={_createField} toggleModal={toggleModal} />;
};

export default PropertiesContainer;
