import React, { useState } from "react";
import { tableStatusItem } from "../../../../data/tableStatusItem";
import StatusesTable from "../statusesTable/StatusesTable";
import StatusesTableItem from "../statusesTable/statusesTableItem/StatusesTableItem";
import { Reorder } from "framer-motion";
const RenderStatusesTable = () => {
  const [items, setItems] = useState(tableStatusItem);
  console.log(items);

  return (
    <>
      <StatusesTable>
        <Reorder.Group as="ul" axis="y" values={items} onReorder={setItems}>
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item}>
              <StatusesTableItem
                id={item.id}
                name={item.name}
                votable={item.votable}
                showOnRoadmap={item.showOnRoadmap}
                privacy={item.privacy}
                color={item.color}
                background={item.backgroundColor}
                nameEllipseColor={item.nameEllipseColor}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </StatusesTable>
    </>
  );
};

export default RenderStatusesTable;
