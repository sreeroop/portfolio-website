import { useTheme } from '@mui/material'
import ExpressIcon from './Icons/Express'
import NextIcon from './Icons/NextJS'
import ThreeJSIcon from './Icons/ThreeJS'
const Tool = ({ tool }) => {
    const theme = useTheme()

    return (
        <span className='tool' style={{ width: '200px', height: '120px' }}>
            <div style={{
                boxShadow: `0 10px 50px ${(tool?.name == 'NextJS' || tool?.name == 'ExpressJS' || tool?.name == 'ThreeJS') ? theme?.palette?.color?.main : tool?.color}`,
                border: `1px solid ${(tool?.name == 'NextJS' || tool?.name == 'ExpressJS' || tool?.name == 'ThreeJS') ? theme?.palette?.color?.main : tool?.color}`,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div style={{ height: '50px', width: '50px', objectFit: 'cover' }}>
                    {tool?.name == 'NextJS' && <NextIcon color={theme?.palette?.color?.main} />}
                    {tool?.name == 'ExpressJS' && <ExpressIcon color={theme?.palette?.color?.main} />}
                    {tool?.name == 'ThreeJS' && <ThreeJSIcon color={theme?.palette?.color?.main} />}
                    {tool?.name !== 'NextJS' && tool?.name !== 'ExpressJS' && tool?.name !== 'ThreeJS' && <img width='50px' height='50px' src={`/${tool?.name}.svg`} />}

                </div>
                <div >
                    {tool?.name}
                </div>
            </div>

        </span>
    )
}

export default Tool