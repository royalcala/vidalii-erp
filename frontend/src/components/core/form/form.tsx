import FormControl from 'template-core/FormControl';
import FormHelperText from 'template-core/FormHelperText';
import Input from 'template-core/Input';
import InputLabel from 'template-core/InputLabel';
import { createStyles, makeStyles, Theme } from 'template-core/styles';
import { Controller, UseControllerOptions, UseFormMethods } from 'react-hook-form';
type FormConfig = {
    alias?: string //other name for the data
    type: 'string' | 'number' | 'email' | 'password' | 'autocompletes'//html5
    helperText?: string,
    rules?: UseControllerOptions<any>['rules'],
    fullWidth?: boolean
}
export type FormProps = {
    // id: string
    data: {
        [key: string]: any
    },
    config: {
        [key: string]: FormConfig
    },
    control: UseFormMethods['control']

}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormControl-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);
let helperId = 0
export function Form(props: FormProps) {
    const classes = useStyles()
    const Inputs = Object.entries(props.config).map(
        ([key, config]) => {
            const uniqueId = 'form_vidalii_' + (helperId++)
            return (
                <Controller
                    name={key}
                    control={props.control}
                    defaultValue={props.data[key]}
                    rules={config?.rules ? config.rules : {}}
                    render={({ onChange, value }) =>
                        <FormControl fullWidth={config?.fullWidth ? true : false}>
                            <InputLabel htmlFor={uniqueId}>{config?.alias ? config.alias : key}</InputLabel>
                            <Input
                                type={config.type}
                                id={uniqueId}
                                value={value}
                                onChange={onChange}
                                name={key}
                            />
                            {config?.helperText && (
                                <FormHelperText>{config.helperText}</FormHelperText>
                            )}
                        </FormControl>
                    }
                />

            )
        }
    )
    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
        >
            {Inputs}
        </form>
    )
}