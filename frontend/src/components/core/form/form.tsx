import FormControl from 'template-core/FormControl';
import FormHelperText from 'template-core/FormHelperText';
import Input from 'template-core/Input';
import InputLabel from 'template-core/InputLabel';
import { createStyles, makeStyles, Theme } from 'template-core/styles';
import { Controller, UseControllerOptions, UseFormMethods } from 'react-hook-form';
import { AutoComplete, AutoCompleteProps } from "./form.autocomple";
type FormConfig = {
    alias?: string //other name for the data
    type: 'string' | 'number' | 'email' | 'password' | 'autocomplete'//html5
    autoComplete?: Omit<AutoCompleteProps, "name" | "onChange" | "placeholder" | "defaultValue">,
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
                    key={key}
                    name={key}
                    control={props.control}
                    defaultValue={props.data[key]}
                    rules={config?.rules ? config.rules : {}}
                    render={({ onChange, value }) => {
                        if (config.type === 'autocomplete')
                            return (
                                <FormControl fullWidth={config?.fullWidth ? true : false}>
                                    <AutoComplete
                                        //@ts-ignore
                                        isMulti={config.autoComplete.isMulti}
                                        //@ts-ignore
                                        loadOptions={config.autoComplete.loadOptions}
                                        name={uniqueId}
                                        onChange={onChange}
                                        placeholder={config?.alias ? config.alias : key}
                                        defaultValue={value}
                                        // defaultValue={[{value:'hi',label:"Hi"},{value:'hi',label:"Hi2"}]}
                                    />
                                </FormControl>
                            )
                        else
                            return (
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
                            )
                    }

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