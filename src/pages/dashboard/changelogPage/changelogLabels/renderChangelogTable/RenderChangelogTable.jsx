import React, { useState } from "react";
import { changelogTableItem } from "../../../../../data/tableStatusItem";
import ChangelogTable from "../changelogTable/ChangelogTable";
import ChangelogTableItem from "../changelogTable/changelogTableItem/ChangelogTableItem";
import { Reorder } from "framer-motion";
const RenderChangelogTable = () => {
  const [items, setItems] = useState(changelogTableItem);
  console.log(items);

  return (
    <>
      <ChangelogTable>
        <Reorder.Group as="ul" axis="y" values={items} onReorder={setItems}>
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item}>
              <ChangelogTableItem
                id={item.id}
                name={item.name}
                color={item.nameEllipseColor}
                colorTag={item.colorTag}
                backgroundTag={item.backgroundTag}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </ChangelogTable>
    </>
  );
};

export default RenderChangelogTable;
