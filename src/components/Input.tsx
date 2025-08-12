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
    <div className="flex flex-col px-5 py-1 border border-gray-300 rounded-md w-96 focus-within:outline-none focus-within:border-blue-500 focus-within:border-2">
      <label htmlFor={name} className="text-sm text-gray-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus:outline-none"
      />
    </div>
  );
};
