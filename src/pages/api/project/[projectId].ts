import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";
import { z } from "zod";

const connectedProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const connProject = await prisma?.connectedProject.findUnique({
    where: { id: req.url?.replace("/api/project/", "") },
    include: { project: true },
  });

  if(!connProject){
    res.status(500).json({
      error: "Project undefined or broken url",
    });
  }

  const categories = await prisma.category.findMany({
    where: { projectId: connProject?.projectId },
    select: {
      name: true,
      fields: {
        select: {
          name: true,
          stringField: { select: { content: true } },
          numberField: { select: { content: true } },
          booleanField: { select: { content: true } },
          imageField: { select: { content: true } },
        },
      },
    },
  });

  type TInitCatecories = typeof categories;

  const removeNulFields = (objectArr: TInitCatecories) => {
    type TCleanObjArr = {
      [name: string]: {
        [name: string]: string | number | boolean;
      }[];
    }[];

    const CleanObjArr: TCleanObjArr = [];
    let CategoryName: string;
    let FieldName: string;
    let Fields: any[] = [];

    objectArr.forEach((object) => {
      CategoryName = object.name;

      object.fields.forEach((field) => {
        FieldName = field.name;
        const values = Object.values(field).filter(
          (val) => val !== null && val !== field.name
        );
        values.forEach((value) => {
          Fields.push({ [FieldName]: value });
        });
      });
      CleanObjArr.push({
        [CategoryName]: Fields,
      });

      CategoryName = ""
      FieldName = ""
      Fields = []
    });

    return CleanObjArr;
  };

  const Sections = removeNulFields(categories);

  res.status(200).json({
    Sections,
  });
};

export default connectedProject;
