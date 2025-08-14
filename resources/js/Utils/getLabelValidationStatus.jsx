import {
    ApprovedStatusLabel,
    PendingStatusLabel,
    RejectedStatusLabel,
} from "@/Components/Label/StatusLabel";

export default function getLabelValidationStatus(validationStatus) {
    switch (validationStatus) {
        case "PENDING":
            return <PendingStatusLabel withBg />;
        case "APPROVED":
            return <ApprovedStatusLabel withBg />;
        case "REJECTED":
            return <RejectedStatusLabel withBg />;
        default:
            break;
    }
}
