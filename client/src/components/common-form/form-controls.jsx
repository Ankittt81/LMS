import { Label } from "@/components/ui/label";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import React from "react";
import { Textarea } from "../ui/textarea";

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getcontrolItem) {
    let element = null;
    const currentControlItemValue=formData[getcontrolItem.name] ||""


    switch (getcontrolItem.componentType) {
      case "input":
        element = (
          <Input
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            type={getcontrolItem.type}
            placeholder={getcontrolItem.placeholder}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getcontrolItem.name]: value })
            }
            value={currentControlItemValue}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getcontrolItem.label} />
            </SelectTrigger>

            <SelectContent>
              {getcontrolItem.options && getcontrolItem.options.length > 0
                ? getcontrolItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            placeholder={getcontrolItem.placeholder}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            id={getcontrolItem.name}
            name={getcontrolItem.name}
            type={getcontrolItem.type}
            placeholder={getcontrolItem.placeholder}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getcontrolItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name} className="flex flex-col gap-1">
          <Label htmlFor={controlItem.name}>{controlItem.label} </Label>
          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
