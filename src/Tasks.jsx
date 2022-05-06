import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function Tasks() {
    const [loading, setLoading] = React.useState(true);
    const [loadedRows, setLoadedRows] = React.useState([]);
    const mounted = React.useRef(true);

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'userId',
            headerName: 'User ID',
            width: 50,
            editable: true,
        },
        {
            field: 'title',
            headerName: 'Title',
            // type: 'string',
            width: 400,
            editable: true,
        },
        {
            field: 'completed',
            headerName: 'Completed',
            sortable: false,
            width: 160,
        },
    ];
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setLoadedRows(json);
                setLoading(false);
            })
            .catch(err => console.log(err))

        return () => {
            mounted.current = false;
        };
    }, []);

    if (loading) return <LinearProgress />
    return (
        <div style={{ height: 500, width: '100%' }}>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={loadedRows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}
