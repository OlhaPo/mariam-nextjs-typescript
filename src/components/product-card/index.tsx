import { ProductItem, ProductStatus } from "@/models/ProductSchema";
import Image from "next/image";
import { Locale } from "../../../i18n.config";
import { getLangField } from "@/lib/dictionaryUtils";
import { Translations } from "@/lib/dictionaryUtils";
import { useCartStore } from "@/services/cart/hooks";
import Swal from "sweetalert2";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function ProductCard({
  product,
  translations,
  lang,
}: {
  product: ProductItem;
  translations: Translations;
  lang: Locale;
}) {
  const { addToCart, isInCart } = useCartStore();

  function getLabelByStatus(
    dict: { [key: string]: string },
    status: ProductStatus
  ): string {
    const key = status.toString();
    return dict ? dict[key] : "";
  }

  function showAlert(title: string) {
    Swal.fire({
      title: `${getLangField(product, "title_", lang)}\n${title}`,
      customClass: {
        title: "swal-title",
        confirmButton: "swal-btn-primary",
      },
      buttonsStyling: false,
    });
  }

  function handleAddToCart(product: ProductItem) {
    if (isInCart(product._id)) {
      showAlert(
        ((translations.page as Translations).cart as Translations)
          .already_in_cart as string
      );
    } else {
      showAlert(
        ((translations.page as Translations).cart as Translations)
          .confirmation_alert as string
      );
    }
    addToCart(product);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
      {product.imageUrls.length === 1 ? (
        <div>
          <Image
            src={product.imageUrls[0]}
            height={500}
            width={500}
            alt={getLangField(product, "title_", lang)}
            unoptimized={true}
          />
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {product.imageUrls.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  height={500}
                  width={500}
                  alt={getLangField(product, "title_", lang)}
                  unoptimized={true}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div className="flex flex-col mt-8 md:mt-0">
        <h2 className="text-left mb-5">
          {getLangField(product, "title_", lang)}
        </h2>
        {product.status === ProductStatus.InStock ? (
          <p>{product.price} UAH</p>
        ) : null}
        <p>
          {getLabelByStatus(
            translations?.productStatus as { [key: string]: string },
            product.status
          )}
        </p>
        <p>{getLangField(product, "description_", lang)}</p>
        {product.status !== ProductStatus.SoldOut ? (
          <button
            className="btn-nav mt-12 md:mt-5"
            onClick={() => handleAddToCart(product)}
            aria-label="Update dimensions"
          >
            {getLabelByStatus(
              translations?.cartButton as { [key: string]: string },
              product.status
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
