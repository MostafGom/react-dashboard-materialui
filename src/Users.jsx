import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';


export default function Users() {
    const [loading, setLoading] = React.useState(true);
    const [loadedRows, setLoadedRows] = React.useState([]);
    const mounted = React.useRef(true);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'User name',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            sortable: false,
            width: 160,
        },
        {
            field: 'website',
            headerName: 'Website',
            sortable: false,
            width: 160,
        },
    ];
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
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
        <div style={{ height: 400, width: '100%' }}>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={loadedRows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}
