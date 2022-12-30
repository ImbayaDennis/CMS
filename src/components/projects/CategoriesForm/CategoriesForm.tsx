import { FormEvent } from "react";
import FormTextInput from "../../common/Form/FormTextInput";
import Loader from "../../common/Loader";

type Props = {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isLoading?: boolean
    errors?: {}
};

const CategoriesForm = ({name, value, isLoading, onChange, handleSubmit}: Props) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 p-2"
      >
        <legend className="px-4 text-3xl font-light">Create new category</legend>
        <FormTextInput
          name={name}
          autoFocus
          value={value}
          onChange={onChange}
          error
        />
        <button type="submit" className="btn-1">
          {isLoading ? <Loader /> : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CategoriesForm;
