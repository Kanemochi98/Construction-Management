import React, { useState ,useRef } from "react";
import style from "./style.module.scss";
import { FormBtn } from "@/components/buttons";
import { FormInput } from "@/components/inputs";

export default function StaffEntryModel({ closeModal, staff }: any) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target as Node)
    ) {
      closeModal();
    }
  };

  const [selectedStaffType, setSelectedStaffType] = useState("");

  const handleStaffTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStaffType(event.target.value);
  };

  return (
    <div id="modalBox" className={style.modal} onClick={handleClickOutside}>
      <div ref={modalContentRef}>
        <div className={style.form_container}>
          <div className={style.form_header}>
            <span>Staff Entry</span>
          </div>
          <form className={style.form_wrapper}>
            <div className={style.form_group}>
              <label htmlFor="file" className={style.file_input_label}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M18 20H4V6h9V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9zm-7.79-3.17l-1.96-2.36L5.5 18h11l-3.54-4.71zM20 4V1h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V6h3V4h-3z" />
                </svg>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className={style.file_input}
                />
              </label>
            </div>
            <div className={style.input_wrapper}>
              <div className={style.input_wrapper_left}>
                <FormInput
                  label="Name:"
                  id="name"
                  name="name"
                  required={true}
                  placeholder="Please enter your name"
                />
                <FormInput
                  label="Email:"
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  placeholder="Please enter your email"
                />
                <FormInput
                  label="Phone:"
                  type="tel"
                  id="phone"
                  name="phone"
                  required={true}
                  placeholder="Please enter phone number"
                />
              </div>
              <div className={style.input_wrapper_right}>
                <FormInput
                  label="Department:"
                  id="department"
                  name="department"
                  required={true}
                  placeholder="Please enter your department"
                />
                <FormInput
                    label="Staff Type:"
                    id="stafftype"
                    name="stafftype"
                    required={true}
                    placeholder="Choose Staff Type"
                    value={selectedStaffType}
                    onChange={handleStaffTypeChange}
                    isSelect={true}
                    options={["Manager", "Employee", "Intern"]}
                />
                <FormInput
                  label="Address:"
                  id="address"
                  name="address"
                  required={true}
                  isTextarea={true}
                  placeholder="Please enter address"
                />
              </div>
            </div>
            <div className={style.form_btn_wrapper}>
              <FormBtn type="button" variant="cancel">
                Cancel
              </FormBtn>
              <FormBtn type="submit" variant="submit">
                Save
              </FormBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
