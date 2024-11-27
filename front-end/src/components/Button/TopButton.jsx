import Button from '@mui/material/Button';

export default function TopButton({text, onPressed, styling}) {
    return (
        <Button title={text} variant={styling} onClick={onPressed}>{text}</Button>
    );
}