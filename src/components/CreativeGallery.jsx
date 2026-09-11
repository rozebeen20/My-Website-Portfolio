import CreativeGalleryCard from './CreativeGalleryCard'

export default function CreativeGallery({
  items,
  onSelect,
  columns = { mobile: 'grid-cols-1', tablet: 'sm:grid-cols-2', desktop: 'lg:grid-cols-3' },
  aspectOverride,
  contain = false,
  featured = false,
}) {
  return (
    <div className={`grid gap-5 ${columns.mobile} ${columns.tablet} ${columns.desktop}`}>
      {items.map((item) => (
        <CreativeGalleryCard
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
          aspectOverride={aspectOverride}
          contain={contain}
          featured={featured}
        />
      ))}
    </div>
  )
}