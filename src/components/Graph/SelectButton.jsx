

const SelectButton = ({ children, onClick }) => {


  return (
    <span onClick={onClick} className='border-[1px] border-gray-400 rounded-[5px] p-[10px] pl-[20px] pr-[20px] cursor-pointer '>
      {children}
    </span>
  );
};

export default SelectButton;