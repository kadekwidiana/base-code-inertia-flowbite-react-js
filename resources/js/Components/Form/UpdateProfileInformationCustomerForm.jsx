import useUpdateProfile from "@/Features/Profile/useUpdateProfile";
import { Button, Label, Textarea, TextInput } from "flowbite-react";

export default function UpdateProfileInformationCustomerForm({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const {
        data,
        errors,
        processing,
        handleChange,
        handleSubmitUpdateProfile,
        setData,
    } = useUpdateProfile();

    // const [provinceId, setProvinceId] = useState(data.province_code ?? null);
    // const [cityId, setCityId] = useState(data.city_code ?? null);

    // const queryClient = useQueryClient();

    // const { data: provinces, isLoading: provinceIsLoading } = useGetProvince();
    // const {
    //     data: cities,
    //     isLoading: cityIsLoading,
    //     isFetching: cityIsFetching,
    // } = useGetCity(provinceId);

    // useEffect(() => {
    //     queryClient.invalidateQueries({
    //         queryKey: ["get-city"],
    //         exact: false,
    //     });
    // }, [provinceId, queryClient]);

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-semibold text-gray-900">
                    Informasi Profil
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Perbarui informasi profil Anda, pastikan semua data sudah
                    benar sebelum menyimpannya.
                </p>
            </header>

            <form
                onSubmit={handleSubmitUpdateProfile}
                className="mt-4 space-y-2"
                encType="multipart/form-data"
            >
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Nama*"
                                color={errors.name ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Masukan nama..."
                            required
                            value={data.name}
                            // isFocused={true}
                            color={errors.name ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.name}
                        />
                    </div>
                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Email*"
                                color={errors.email ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Masukan email..."
                            required
                            value={data.email}
                            // isFocused={true}
                            color={errors.email ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.email}
                            readOnly
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="phone_number"
                                value="Nomor Telepon*"
                                color={errors.phone_number ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            placeholder="Masukan nomor telepon..."
                            required
                            value={data.phone_number}
                            // isFocused={true}
                            color={errors.phone_number ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.phone_number}
                            readOnly
                        />
                    </div>
                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="role"
                                value="Role*"
                                color={errors.role ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="role"
                            name="role"
                            type="text"
                            placeholder="Masukan role..."
                            required
                            readOnly
                            value={data.role}
                            // isFocused={true}
                            color={errors.role ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.role}
                        />
                    </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="province_code"
                                value="Provinsi*"
                                color={
                                    errors.province_code ? "failure" : "gray"
                                }
                            />
                        </div>
                        <Select
                            className="mt-1 block w-full rounded border-gray-300"
                            value={provinceId ?? ""}
                            onChange={(e) => {
                                const selected = e.target.value || null;
                                setProvinceId(selected);
                                setCityId(null); // reset city
                                setData("province_code", selected);
                                setData(
                                    "province_name",
                                    provinces?.data.data.rajaongkir.results.find(
                                        (prov) => prov.province_id === selected
                                    ).province
                                );
                                setData("city_code", null);
                                setData("city_name", null);
                            }}
                            color={errors.province_code ? "failure" : "gray"}
                            helperText={errors.province_code}
                            disabled={provinceIsLoading}
                        >
                            <option value="">-- Pilih provinsi --</option>
                            {!provinceIsLoading &&
                                provinces?.data.data.rajaongkir.results.map(
                                    (prov) => (
                                        <option
                                            key={prov.province_id}
                                            value={prov.province_id}
                                        >
                                            {prov.province}
                                        </option>
                                    )
                                )}
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="city_code"
                                value="Kota*"
                                color={errors.city_code ? "failure" : "gray"}
                            />
                        </div>
                        <Select
                            value={cityId ?? ""}
                            onChange={(e) => {
                                setCityId(e.target.value || null);
                                setData("city_code", e.target.value || null);
                                setData(
                                    "city_name",
                                    cities?.data.data.rajaongkir.results.find(
                                        (city) =>
                                            city.city_id === e.target.value
                                    ).city_name
                                );
                            }}
                            color={errors.city_code ? "failure" : "gray"}
                            helperText={errors.city_code}
                            disabled={
                                !provinceId || cityIsLoading || cityIsFetching
                            }
                        >
                            <option value="">-- Pilih kota --</option>
                            {!cityIsLoading &&
                                cities?.data.data.rajaongkir.results.map(
                                    (city) => (
                                        <option
                                            key={city.city_id}
                                            value={city.city_id}
                                        >
                                            {city.type} {city.city_name}
                                        </option>
                                    )
                                )}
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="sub_district"
                                value="Kecamatan*"
                                color={errors.sub_district ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="sub_district"
                            name="sub_district"
                            type="text"
                            placeholder="Masukan kecamatan..."
                            required
                            value={data.sub_district}
                            // isFocused={true}
                            color={errors.sub_district ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.sub_district}
                        />
                    </div>

                    <div className="">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="village"
                                value="Desa/Kelurahan*"
                                color={errors.village ? "failure" : "gray"}
                            />
                        </div>
                        <TextInput
                            id="village"
                            name="village"
                            type="text"
                            placeholder="Masukan desa/kelurahan..."
                            required
                            value={data.village}
                            // isFocused={true}
                            color={errors.village ? "failure" : "gray"}
                            onChange={handleChange}
                            helperText={errors.village}
                        />
                    </div>
                </div> */}

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="address"
                            value="Alamat Lengkap*"
                            color={errors.address ? "failure" : "gray"}
                        />
                    </div>
                    <Textarea
                        rows={4}
                        id="address"
                        name="address"
                        placeholder="Masukan alamat..."
                        value={data.address}
                        onChange={handleChange}
                        color={errors.address ? "failure" : "gray"}
                        helperText={errors.address}
                    />
                </div>
                <div className="flex items-center justify-end gap-4">
                    <Button
                        disabled={processing}
                        type="submit"
                        color="none"
                        className="bg-primary/80 hover:bg-primary/100 text-white"
                    >
                        Simpan
                    </Button>
                </div>
            </form>
        </section>
    );
}
