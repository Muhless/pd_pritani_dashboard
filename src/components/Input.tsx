type InputComponentProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export const InputComponent = ({
  label,
  name,
  type = "text",
  placeholder,
}: InputComponentProps) => {
  return (
    <div className="flex items-center justify-between w-full gap-3">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none"
      />
    </div>
  );
};
