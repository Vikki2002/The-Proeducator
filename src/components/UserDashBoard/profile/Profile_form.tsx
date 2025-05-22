"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { DeleteIcon } from "lucide-react";
import CircularProgress from "@mui/material/CircularProgress";


function CircularProgressWithLabel({ value }: { value: number }) {
    return (
        <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" value={value} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                >{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}



export default function ProfileCompletionStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [certificates, setCertificates] = React.useState<(File | null)[]>([]);
    const totalSteps = 7;
    const progress = (activeStep / totalSteps) * 100;

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addCertificate = () => {
        setCertificates([...certificates, null]);
    };

    const removeCertificate = (index: number): void => {
        setCertificates(certificates.filter((_, i) => i !== index));
    };

    interface CertificateChangeParams {
        index: number;
        file: File;
    }

    const handleCertificateChange = ({ index, file }: CertificateChangeParams): void => {
        const updatedCertificates = [...certificates];
        updatedCertificates[index] = file;
        setCertificates(updatedCertificates);
    };
    const [documents, setDocuments] = React.useState<{
        policeClearance: File | null,
        medicalCertificate: File | null,
    }>({
        policeClearance: null,
        medicalCertificate: null,
    });

    const handleDocumentChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (event.target.files) {
            setDocuments((prev) => ({ ...prev, [type]: event.target.files?.[0] || null }));
        }
    };

    const steps = [
        {
            label: "Personal Information",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Full Name" variant="outlined" disabled defaultValue="User" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Email" variant="outlined" disabled defaultValue="test@gmail.com" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth label="Phone Number" variant="outlined" />
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Academic Information",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={3} label="Research/Publications" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={3} label="Academic Achievements & Awards" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" fontWeight={600}>📜 Online Certifications</Typography>
                    </Grid>
                    {certificates.map((cert, index) => (
                        <Grid item xs={12} key={index} className="flex items-center gap-2">
                            <input
                                type="file"
                                onChange={(e) => e.target.files && handleCertificateChange({ index, file: e.target.files[0] })}
                            />
                            <IconButton onClick={() => removeCertificate(index)} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={addCertificate}>
                            ➕ Add Certificate
                        </Button>
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Financial Information",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={2} label="Expected Cost of Living (Rent, Food, Transport, Misc.)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Scholarship Applied (Yes/No, Name of Scholarship)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Loan Approval Status (if applicable)" variant="outlined" />
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Preferred Study Details",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={2} label="Alternative Course Options (Backup Choices)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={3} label="Career Goals (Short-term & Long-term)" variant="outlined" />
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Work Experience",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={2} label="Internship Details (if any)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={2} label="Freelance or Volunteer Experience" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth multiline rows={2} label="Key Achievements in Work Experience" variant="outlined" />
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Additional Documents",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Police Clearance Certificate (if required)</Typography>
                        <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleDocumentChange(e, "policeClearance")} />
                        {documents.policeClearance && (
                            <Typography variant="caption">File uploaded: {documents.policeClearance.name}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">Medical Certificate (if required by the university)</Typography>
                        <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleDocumentChange(e, "medicalCertificate")} />
                        {documents.medicalCertificate && (
                            <Typography variant="caption">File uploaded: {documents.medicalCertificate.name}</Typography>
                        )}
                    </Grid>
                </Grid>
            ),
        },
        {
            label: "Other Preferences",
            field: (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Part-time Work Preferences (Allowed under visa conditions?)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Transportation Preferences (Public Transport, Private, etc.)" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Local Guardian Contact (if any)" variant="outlined" />
                    </Grid>
                </Grid>
            ),
        },
    ];

    return (
        <Box className="relative w-full max-w-3xl mx-auto mt-[2rem] p-6 bg-white shadow-md rounded-lg">
            {/* Progress Indicator */}
            <div className="absolute right-[1rem]">
                <CircularProgressWithLabel value={progress} />
            </div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <Typography variant="h6" fontWeight={600}>{step.label}</Typography>
                        </StepLabel>
                        <StepContent>
                            {step.field}
                            <Box mt={2}>
                                <Button variant="contained" color="primary" onClick={handleNext} sx={{ mr: 1 }}>
                                    {index === steps.length - 1 ? "Finish" : "Continue"}
                                </Button>
                                <Button disabled={index === 0} onClick={handleBack}>
                                    Back
                                </Button>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={3} sx={{ p: 3, mt: 2, textAlign: "center" }}>
                    <Typography variant="h6" fontWeight={600}>All steps completed - you&apos;re finished!</Typography>
                    <Button onClick={handleReset} sx={{ mt: 2 }} variant="outlined" color="secondary">
                        Reset
                    </Button>
                </Paper>
            )}
        </Box>
    );
}