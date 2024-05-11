import { useState } from "react";
import Badge from "../../utils/Badge";
import Input from "../../utils/Forms/Input";
import product1 from "./../../assets/product-img/1.jpg";
import { TbEdit, TbEye, TbTrash } from "react-icons/tb";
import EditForm from "./EditForm/EditForm";
import Modal from "../../utils/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Button from "../../utils/Button";
import AddForm from "./AddForm/AddForm";
const Products = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const openEdit = () => setEditOpen(true);
  const closeEdit = () => setEditOpen(false);
  const openAdd = () => setAddOpen(true);
  const closeAdd = () => setAddOpen(false);
  const openProduct = () => setProductOpen(true);
  const closeProduct = () => setProductOpen(false);

  return (
    <div>
      <div className="bg-orange-400 pb-12 pt-6">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-4 items-center">
            <div>
              <Input label="Search By Model Number" />
            </div>
            <div></div>
            <div></div>
            <div className="pt-7 text-right">
              <Button onClick={openAdd}>Add Product</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-12">
          <table className="table-fixed w-full rounded-xl shadow-xl">
            <thead>
              <tr className="border-b-2 border-slate-200 text-xl">
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Product Image
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Product Code
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Chinese Code
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Price
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  In-stock
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Sold
                </th>
                <th className="font-freeman font-normal border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  Returned
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="last:border-b-0 border-b-2 text-xl">
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3">
                  <img
                    src={product1}
                    className="object-cover w-24 h-16 rounded-md mx-auto"
                  />
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  S2306
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  X384545-01
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  770TK
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  12
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  6
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  1
                </td>
                <td className="border-r-2 last:border-r-0 border-slate-200 px-2 py-3 text-center uppercase font-semibold">
                  <div className="flex space-x-3">
                    <a href="#" type="button" onClick={openEdit}>
                      <Badge bg="bg-orange-300 hover:bg-orange-400">
                        <TbEdit />
                      </Badge>
                    </a>
                    <button type="button" onClick={openProduct}>
                      <Badge bg="bg-sky-300">
                        <TbEye />
                      </Badge>
                    </button>
                    <button type="button">
                      <Badge bg="bg-rose-300">
                        <TbTrash />
                      </Badge>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {editOpen && (
          <Modal editOpen={editOpen} title="Edit Product" close={closeEdit}>
            <EditForm></EditForm>
          </Modal>
        )}
        {addOpen && (
          <Modal addOpen={addOpen} title="Add Product" close={closeAdd}>
            <AddForm></AddForm>
          </Modal>
        )}
        {productOpen && (
          <Modal
            productOpen={productOpen}
            title="Product"
            close={closeProduct}
          ></Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
