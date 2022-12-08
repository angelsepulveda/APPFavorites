import React from "react";
import {DataGrid} from "@mui/x-data-grid";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
    return (
        <>
            <DataGrid
                disableColumnSelector
                disableSelectionOnClick
                autoHeight

            />
        </>
    )
}

export default Home;