import {  makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import list from '../../MOCK_DATA.json';

const useStyles = makeStyles({  
    table: {
        border:'1px solid rgba(224, 224, 224, 1)',
        marginTop:20
     },
  
  });

const Categories = () => {
  const classes = useStyles();
    return <>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    list.map((item) => (

                        <TableRow key={item.id}>
                            <TableCell>
                                {item.name}
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </>;
};

export default Categories;
