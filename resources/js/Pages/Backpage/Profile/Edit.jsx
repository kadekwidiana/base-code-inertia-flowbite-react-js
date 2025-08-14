import BackpageLayout from "@/Layouts/BackpageLayout";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function EditProfilePage({ mustVerifyEmail, status }) {
    return (
        <BackpageLayout>
            <div className="min-h-[84dvh]">
                <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2">
                    <div className="border-stroke shadow-default rounded-lg border bg-white p-4">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="border-stroke shadow-default rounded-lg border bg-white p-4">
                            <UpdatePasswordForm className="" />
                        </div>
                    </div>
                </div>
            </div>
        </BackpageLayout>
    );
}
