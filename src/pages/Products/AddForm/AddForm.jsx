import FileInput from "../../../utils/Forms/FileInput";
import Input from "../../../utils/Forms/Input";

const AddForm = () => {
  return (
    <form>
      <div className="flex items-center space-x-2">
        <Input label="Product Title" name="title" type="text" />
        <Input label="Price" name="price" type="text" />
      </div>
      <div className="mt-8 mb-5">
        <FileInput name="productImage" multiple="true"></FileInput>
      </div>
      <div className="flex items-center space-x-2 mb-5">
        <Input
          label="Product Code"
          name="localCode"
          type="text"
          width="w-1/2"
        />
        <Input
          label="Chinese Code"
          name="chineseCode"
          type="text"
          width="w-1/2"
        />
      </div>
      <div className="flex items-center space-x-2 mb-5">
        <Input
          label="Chinese Product Link"
          name="chineseProductLink"
          type="text"
          width="w-1/2"
        />
        <Input
          label="Chinese Vendor Link"
          name="chineseVendorLink"
          type="text"
          width="w-1/2"
        />
      </div>
      <div className="flex items-center space-x-2 mb-5">
        <Input
          label="Write Category"
          name="category"
          type="text"
          width="w-1/2"
        />
        <Input
          label="Chinese Vendor Link"
          name="chineseVendorLink"
          type="text"
          width="w-1/2"
        />
      </div>
    </form>
  );
};

export default AddForm;
