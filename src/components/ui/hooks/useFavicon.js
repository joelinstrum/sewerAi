import { useEffect } from "react";
import { setFavicon } from "@lib/utils";

const useFavicon = () => {
  useEffect(() => {
    const link =
      "https://images.squarespace-cdn.com/content/v1/5f1f87c26b7fe926d46dde72/1595902475709-SVNYKA5LNGV75WWL4OCL/ke17ZwdGBToddI8pDm48kOtFSX5ar-3in-gfuViTcoB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmWqtXQpyB9QhpIPr0Cl6sVUolg5qwGaP7eq_pJAat8Qcow9Bz5p_mIYdrvHJWm05z/favicon.ico?format=100w";
    setFavicon(link);
  }, []);
};

export default useFavicon;
