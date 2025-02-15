import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

export const PackageAppliance = (props) => {
    const { appliances, direction } = props
    return (
        <FormGroup sx={direction == "column" ? { display: 'flex', flexDirection: 'column', height: 200 } : {}
        }>
            {appliances.map((appliance: any) => {
                return (
                    <FormControlLabel
                        key={`package-appliance-${appliance.id}`}
                        control={
                            <Checkbox name={appliance.id} checked/>
                        }
                        label={appliance.name}
                    />
                )
            })}
        </FormGroup>
    )
}