import { Box } from '@chakra-ui/react'
import React from 'react'

const Table = ({name,price,tag}) => {
  return (
    <Box>
              <table>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>tag</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{tag}</td>
          </tr>
        </table>
    </Box>
  )
}

export default Table
