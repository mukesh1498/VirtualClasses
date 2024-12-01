import { useSelector } from "react-redux"
import { FaCheck } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { CourseInformation } from "./CourseInformation/CourseInformation"
import CourseBuilderForm from "./CourseBuilder/CourseBuilder"
import { PublishCourse } from "./PulblishCourse/publishCourse"
import { setStep } from "../../../../Slices/coursesSlice"


export const RenderAddcourses = () => {
    const { step } = useSelector((state) => state.course)
    const dispatch = useDispatch()
    const steps = [
        {
            id: 1,
            title: "Course Information"
        },
        {
            id: 2,
            title: "Course Builder "
        },
        {
            id: 3,
            title: "Publish"
        }
    ]


    return (
        <div>
            <div className="relative mb-2 flex w-full justify-center">
                {steps.map((item) => (
                    <>
                        <div
                            className="flex flex-col items-center "
                            key={item.id}
                        >
                            <button className={` ${2 === item.id ? "border-yellow-50 bg-yellow-900 text-yellow-50 " : "border-richblack-700 bg-richblack-800 text-richblack-300"} grid cursor-default  rounded-full
                             place-items-center w-[34px]  aspect-square mb-4 border-[1px]   text-[10px]
                                ${2 > item.id ? "bg-yellow-5 text-black " : ""}`
                            }>
                                {2 > item.id ? (<FaCheck className="font-bold text-richblack-900" />) : (item.id)}
                            </button>
                        </div>
                        {item.id !== steps.length && (
                            <>
                                <div
                                    className={`h-[calc(34px/3)] w-[33%]  border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"
                                        } `}
                                ></div>
                            </>
                        )}
                    </>
                ))}
            </div>
            <div className="relative mb-16 flex w-full select-none justify-between">
                {steps.map((item) => (
                    <>
                        <div
                            className="flex min-w-[130px] flex-col items-center gap-y-2"
                            key={item.id}
                        >
                            <p
                                className={`text-sm ${step >= item.id ? "text-richblack-5" : "text-richblack-500"
                                    }`}
                            >
                                {item.title}
                            </p>
                        </div>
                    </>
                ))}
            </div>
            {/* Render specific component based on current step */}
            {step == 1 && <CourseInformation />}
            {step == 2 && <CourseBuilderForm />}
            {step == 3 && <PublishCourse />}
        </div>
    )
}