type InputComponentProps = {
  label: string;
  className?: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export const InputComponent = ({
  label,
  className,
  name,
  type = "text",
  placeholder,
}: InputComponentProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className={className}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 text-sm transition-all duration-150 border border-gray-300 rounded-md outline-none w-96 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
      />
    </div>
  );
};
