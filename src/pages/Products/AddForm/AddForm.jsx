import Input from "../../../utils/Forms/Input";

const AddForm = () => {
  return (
    <form>
      <div className="flex items-center space-x-2">
        <Input label="Product Title" name="title" type="text" />
        <Input label="Price" name="price" type="text" />
      </div>
      <Input label="Product Code" name="localCode" type="text" width="w-1/2" />
      <Input
        label="Chinese Code"
        name="chineseCode"
        type="text"
        width="w-1/2"
      />
    </form>
  );
};

export default AddForm;
