import HoodiesCard from "@/components/Hoodies";

export default function HoodiesList() {
    return (
        <div className="p-5 o text-center">
            <h1 className="text-3xl text-white mb-5 font-semibold font-serif">All Collections</h1>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
                <HoodiesCard image="/images/batch-001.png" name="BATCH 001" />
                <HoodiesCard image="/images/batch-002.png" name="BATCH 002" />
                <HoodiesCard image="/images/batch-003.png" name="BATCH 003" />
                <HoodiesCard image="/images/batch-004.png" name="BATCH 004" />
                <HoodiesCard image="/images/batch-005.png" name="BATCH 005" />
                <HoodiesCard image="/images/batch-006.png" name="BATCH 006" />
                <HoodiesCard image="/images/batch-007.png" name="BATCH 007" />
                <HoodiesCard image="/images/batch-008.png" name="BATCH 008" />
            </div>
        </div>
    );
}